import { useState, useEffect } from 'react'
import ChatPreview from './ChatPreview'

export default function AllChats({user, socket}) {
  const id = user.user_id
  const BASE_URL = `http://localhost:8000/conversations/user/${id}/`

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
      return (
          <ChatPreview con={con.id} socket={socket}/>
      );
    });
  };

  const loading = () => {
    return (
      <h1>Loading</h1>
    )
  }

  return (
    <div>AllChats
      <p>Search Box</p>
      {user ? loaded() : loading()}
    </div>
  )


}
