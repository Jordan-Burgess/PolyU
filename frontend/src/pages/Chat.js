import React from 'react'
import Nav from '../components/Nav'
import AllChats from '../components/AllChats'
import ChatRoom from '../components/ChatRoom'
import io from 'socket.io-client'
const socket = io.connect('http://localhost:3001')

export default function Chat() {
  return (
    <div>Chat
        <AllChats socket={socket}/>
        <ChatRoom socket={socket}/>
        <Nav/>
    </div>

  )
}
