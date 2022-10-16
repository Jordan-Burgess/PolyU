import {useState} from 'react'

export default function ChatRoomHeader({conId}) {
  
  const [userPre, setUserPre] = useState()

  const getUser = async () => {
    try {
      const response = await fetch(`http://localhost:8000/${conId}/`);
      const userInfo = await response.json();
      setUserPre(userInfo)
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div> 
      <img src='#' alt='profile image'/>
      <h1>Username - Leaning Language</h1>
    </div>
  )
}
