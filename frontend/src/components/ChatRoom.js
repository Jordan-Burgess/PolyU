import React from 'react'
import ChatRoomHeader from './ChatRoomHeader'
import Conversation from './Conversation'

export default function ChatRoom({socket, conId, setLastMessage, lastMessage}) {
  return (
    <div>
      <ChatRoomHeader/>
      <Conversation socket={socket} conId={conId} setLastMessage={setLastMessage} lastMessage={lastMessage}/>
    </div>
  )
}
