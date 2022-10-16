import '../styles/chat.css'
import { useContext, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import Nav from '../components/Nav'
import AllChats from '../components/AllChats'
import ChatRoom from '../components/ChatRoom'
import AuthContext from '../components/Auth'
import io from 'socket.io-client'

const socket = io.connect('http://localhost:3001')

export default function Chat() {
  const location = useLocation()
  let {user} = useContext(AuthContext)
  const [conId, setConId] = useState(null)
  const [lastMessage, setLastMessage] = useState()

  useEffect(()=>{
    if(conId){
      setConId(location.state.conversationId)
    }
  }, []);

  return (
    <div className='ChatBody'>
      <div className='Chat'>
        <AllChats socket={socket} user={user} conId={conId} setConId={setConId}/>
        <ChatRoom socket={socket} user={user} conId={conId} setLastMessage={setLastMessage} lastMessage={lastMessage}/>
      </div>
      <Nav/>
    </div>

  )
}
