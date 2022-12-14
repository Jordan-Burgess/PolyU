import { useState, useEffect } from 'react'
import ChatPreview from './ChatPreview'

export default function AllChats({user, socket, setConId, conId}) {
  const id = user.user_id
  const BASE_URL = `https://polyu-backend.herokuapp.com/conversations/user/${id}/`

  const [conversations, setConversations] = useState([])
  
  const getConversations = async () => {
    try {
      const response = await fetch(BASE_URL);
      const allConversations = await response.json();
      setConversations(allConversations)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    getConversations()
  }, []);

  const loaded = () => {
    return conversations?.map((con) => {
      const handleClick = () => {
        setConId(con.id)
      }
      
      return (
          <div onClick={handleClick} className='ChatPreview'>
            <ChatPreview con={con.id || conId} socket={socket} />
          </div>
      );
    });
  };

  const loading = () => {
    return (
      <h1>Loading</h1>
    )
  }

  return (
    <div className='AllChats'>
      <h1>All Chats</h1>
      {user ? loaded() : loading()}
    </div>
  )


}
