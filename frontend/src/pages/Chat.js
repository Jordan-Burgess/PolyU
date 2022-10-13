import { useContext, useState } from 'react'
import Nav from '../components/Nav'
import AllChats from '../components/AllChats'
import ChatRoom from '../components/ChatRoom'
import AuthContext from '../components/Auth'
import io from 'socket.io-client'

const socket = io.connect('http://localhost:3001')

export default function Chat() {
  let {user} = useContext(AuthContext)
  const [conId, setConId] = useState(null)
  const [lastMessage, setLastMessage] = useState()
  console.log("Clicked: ", conId)
  return (
    <div>Chat
        <AllChats socket={socket} user={user} conId={conId} setConId={setConId}/>
        <ChatRoom socket={socket} conId={conId} setLastMessage={setLastMessage} lastMessage={lastMessage}/>
        <Nav/>
    </div>

  )
}
