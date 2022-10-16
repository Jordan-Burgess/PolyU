import {useState, useEffect, useContext} from 'react'
import AuthContext from './Auth'


export default function ChatRoomHeader({conId}) {
  const {user} = useContext(AuthContext)
  const [userChat, setUserChat] = useState()
  const [userPre, setUserPre] = useState()

  const getUser = async () => {
    try {
      const response = await fetch(`http://localhost:8000/${userChat}/`);
      const userInfo = await response.json();
      setUserPre(userInfo)
    }catch(err){
      console.log(err)
    }
  }

  const getConversation = async () => {
    try {
      const response = await fetch(`http://localhost:8000/conversation/${conId}/`);
      const userInfo = await response.json();
      if (userInfo[0].users[0] != user.user_id){
        setUserChat(userInfo[0].users[0])
      }
      else{
        setUserChat(userInfo[0].users[1])
      }
      console.log(userChat)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    getConversation()
  }, [conId]);

  useEffect(() => {
    if(userChat){
      getUser()
    }
  }, [userChat])
  

  return (
    <div> 
      {userPre ? (
      <div className='HeaderPreview'>
        <img className='ChatImagePreview' src={userPre?.profile[0].image} alt='profile image'/>
        <h2>{userPre?.user[0].username} - Language Partner</h2>
      </div>
      ) : <h2>Select a Chat</h2> }
    </div>
  )
}
