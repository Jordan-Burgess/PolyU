import React from 'react'
import ChatRoomHeader from './ChatRoomHeader'
import Conversation from './Conversation'

export default function ChatRoom({socket}) {
  return (
    <div>
      <ChatRoomHeader/>
      <Conversation socket={socket}/>
    </div>
  )
}
