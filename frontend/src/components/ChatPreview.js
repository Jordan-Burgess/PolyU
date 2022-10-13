import { useState, useEffect } from 'react'

export default function ChatPreview({con, socket}) {
  const [lastMessage, setLastMessage] = useState()
  const BASE_URL = `http://localhost:8000/conversations/${con}/`
  
  const getMessages = async () => {

    try {
      const response = await fetch(BASE_URL);
      const allMessages = await response.json();
      setLastMessage(allMessages[allMessages.length - 1])
      socket.emit("send_message", lastMessage)
  
    }catch(err){
      console.log(err)
    }
  }
  
  useEffect(()=>{
    getMessages()
  }, [lastMessage])

  useEffect(()=>{
    socket.on("receive_message", (data) => {
      getMessages()
    })
  }, [socket])

  const loaded = () => {
  return (
    <div>
        <img src='#' alt='profile image'/>
        <h3>Username</h3>
        <p>{lastMessage.text}...</p>
    </div>
  )
  }
  const loading = () => {
    return (
      <p>Loading</p>
    )
  }
  return (
    <div>
      {lastMessage ? loaded() : loading()}
    </div>
  )
}
