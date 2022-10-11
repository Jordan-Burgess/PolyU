import React from 'react'
import ChatRoomHeader from './ChatRoomHeader'
import Conversation from './Conversation'
import Input from './Input'

export default function ChatRoom() {
  return (
    <div>
      <ChatRoomHeader/>
      <Conversation/>
      <Input/>
    </div>
  )
}
