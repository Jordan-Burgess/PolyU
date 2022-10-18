import { useState, useEffect, useContext } from 'react'
import AuthContext from './Auth'
import dateFormat from 'dateformat'

export default function Conversation({socket, conId, setLastMessage, lastMessage}) {
  const {user} = useContext(AuthContext)
  const [allMessages, setAllMessages] = useState([])
  const BASE_URL = `https://polyu-backend.herokuapp.com/conversations/${conId}/`

  const getMessages = async () => {
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
        user: user.user_id
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
      socket.emit("send_message", text)
      // setLastMessage(responseData)
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
      const isUser = text.user == user.user_id
      return (
        <div className='AllTexts'>
        <div className={isUser ? 'Text Blue' : 'Text Gray'}>
          <p>{text.text}</p>
          <p className='time'>{dateFormat(text.created_at, 'm/d/yy h:MM TT')}</p>
        </div>
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
      <div className='ChatBox'>
      {allMessages ? loaded() : loading()}
      </div>
      {conId ? (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          name="text"
          placeholder="Enter Message"
          onChange={handleChange}
          required
          className='EnterChat'
        />
        <input type='Submit' value='Enter' className='ChatButton'/>
      </form>
      ) : null }
    </div>
  )
}
