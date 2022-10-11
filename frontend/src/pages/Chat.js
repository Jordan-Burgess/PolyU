import React from 'react'
import Nav from '../components/Nav'
import AllChats from '../components/AllChats'
import ChatRoom from '../components/ChatRoom'

export default function Chat() {
  return (
    <div>Chat
        <AllChats/>
        <ChatRoom/>
        <Nav/>
    </div>

  )
}
