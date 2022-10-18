import { useState, useEffect, useContext } from 'react'
import AuthContext from './Auth'

export default function ChatPreview({con, socket}) {
  const {user} = useContext(AuthContext);
  const [lastMessage, setLastMessage] = useState()
  const [userChat, setUserChat] = useState()
  const [userPre, setUserPre] = useState()
  const [otherUser, setOtherUser] = useState()
  const BASE_URL = `http://localhost:8000/conversations/${con}/`
  
  const getMessages = async () => {

    try {
      const response = await fetch(BASE_URL);
      const allMessages = await response.json();
      setLastMessage(allMessages[allMessages.length - 1])
      for (let i=0; i<allMessages.length; i++){
        if (allMessages[i].user != user.user_id){
          setUserChat(allMessages[i].user)
          break
        }
      }
  
    }catch(err){
      console.log(err)
    }
  }

  const getUser = async () => {
    if (userChat) {
    try {
      const response = await fetch(`http://localhost:8000/${userChat}/`);
      const userInfo = await response.json();
      setUserPre(userInfo)
    }catch(err){
      console.log(err)
    }
  }
  }

  const getConversation = async () => {
    try {
      const response = await fetch(`http://localhost:8000/conversation/${con}/`);
      const userInfo = await response.json();
      if (userInfo[0].users[0] != user.user_id){
        setUserChat(userInfo[0].users[0])
      }
      else{
        setUserChat(userInfo[0].users[1])
      }
    }catch(err){
      console.log(err)
    }
  }


  
  useEffect(()=>{
      getMessages()
  }, [])

  useEffect(()=>{
    getUser()
  }, [userChat])

  const loaded = () => {
  return (
    <div className='InnerChatPreview'>
        <img src={userPre.profile[0].image} alt='profile image' className='ChatImage'/>
        <div className='ConvoInfo'>
          <h3 className='ChatUsernamePreview'>{userPre.user[0].username}</h3>
          {lastMessage && lastMessage.length > 30 ? (
          <p>{lastMessage?.text}...</p>
          ) : lastMessage ? (
          <p>{lastMessage?.text}</p>
          ) : <p>New Chat</p> }
        </div>
    </div>
  )
  }
  const loading = () => {
    getConversation()
    return (
      <p>Loading</p>
    )
  }
  return (
    <div>
      {userPre ? loaded() : loading()}
    </div>
  )
}
