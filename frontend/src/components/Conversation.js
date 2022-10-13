import { useState, useEffect } from 'react'

export default function Conversation({socket, conId, setLastMessage, lastMessage}) {
  const [allMessages, setAllMessages] = useState([])
  const BASE_URL = `http://localhost:8000/conversations/${conId}/`
  
  
  const getMessages = async () => {
    console.log(conId)
    if (conId) {
      try {
        const response = await fetch(BASE_URL);
        const allMessages = await response.json();
        setAllMessages(allMessages)
    
      }catch(err){
        console.log(err)
      }
    }
  }

  const [text, setText] = useState('')
  const handleChange = (e) => {
    setText(e.target.value)
  }
    
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const newMessage = {
        text: text,
        user: 1
      }
      const messageOutput = JSON.stringify(newMessage)
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: messageOutput
      }
      const response = await fetch(BASE_URL, options)
      const responseData = await response.json()
      setAllMessages([...allMessages, responseData])
      socket.emit("send_message", responseData)
      setLastMessage(responseData)
      setText('')
    }catch(err){
      console.log(err)
    } 
  }

  useEffect(()=>{
    getMessages()
  }, [conId])

  useEffect(()=>{
    socket.on("receive_message", (data) => {
      getMessages()
    })
  }, [socket])

  const loaded = () => {
    return allMessages?.map((text) => {
      return (
        <div>
          <p>{text.text}</p>
          <p>{text.user_id}</p>
          <p>{text.created_at}</p>
        </div>
      )
    })
  }
  const loading = () => {
    return(
      <h1>Loading</h1>
    )
  }

  return (
    <div>
      {allMessages ? loaded() : loading()}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          name="text"
          placeholer="Enter Message"
          onChange={handleChange}
          required
        />
        <input type='Submit' value='Enter'/>
      </form>
    </div>
  )
}
