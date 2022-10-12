import { useState, useEffect } from 'react'

export default function Conversation() {
  const [allMessages, setAllMessages] = useState([])
  const BASE_URL = `http://localhost:8000/conversations/1/`
  
  const getMessages = async () => {

    try {
      const response = await fetch(BASE_URL);
      const allMessages = await response.json();
      setAllMessages(allMessages)
  
    }catch(err){
      console.log(err)
    }
  }

  const [text, setText] = useState('')
  const handleChange = (e) => {
    setText(e.target.value)
  }
    
  const handleSubmit = (e) => {
    e.preventDefault()
    setText('')      
  }

  useEffect(()=>{
    getMessages()
  }, [])

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
          name="message"
          placeholer="Enter Message"
          onChange={handleChange}
          required
        />
        <input type='submit' value='Enter'/>
      </form>
    </div>
  )
}
