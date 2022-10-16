import React from 'react'
import ChatRoomHeader from './ChatRoomHeader'
import Conversation from './Conversation'

export default function ChatRoom({socket, conId, setLastMessage, lastMessage, user}) {
  return (
    <div className='ChatRoom'>
      <ChatRoomHeader conId={conId} user={user}/>
      <Conversation socket={socket} conId={conId} setLastMessage={setLastMessage} lastMessage={lastMessage}/>
    </div>
  )
}
