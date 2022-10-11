import { useState, useEffect } from 'react'

export default function Conversation() {
  const [messages, setMessages] = useState([])
  const BASE_URL = `http://localhost:8000/conversations/1/`
  
  const getMessages = async () => {

    try {
      console.log('test2')
      const response = await fetch(BASE_URL);
      console.log("test", response)
      const allMessages = await response.json();
      setMessages(allMessages)
      console.log(allMessages)
  
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    getMessages()
  }, [])

  return (
    <div>Conversation
      <p>There are {messages.length} messages</p>
    </div>

  )
}
