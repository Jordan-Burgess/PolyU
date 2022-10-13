import { useContext } from 'react'
import Nav from '../components/Nav'
import AllChats from '../components/AllChats'
import ChatRoom from '../components/ChatRoom'
import AuthContext from '../components/Auth'
import io from 'socket.io-client'

const socket = io.connect('http://localhost:3001')

export default function Chat() {
  let {user} = useContext(AuthContext)
  return (
    <div>Chat
        <AllChats socket={socket} user={user}/>
        <ChatRoom socket={socket}/>
        <Nav/>
    </div>

  )
}
