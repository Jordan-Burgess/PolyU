import {useState, useEffect} from 'react'

export default function UserPreview({user}) {
  
  const [userPre, setUserPre] = useState(null)
  const BASE_URL = `http://localhost:8000/${user.id}/`

  const getUser = async () => {
      try {
        const response = await fetch(BASE_URL);
        const userInfo = await response.json();
        setUserPre(userInfo)
      }catch(err){
        console.log(err)
      }
    }

    useEffect(()=>{
      getUser()
    }, [])
  

    const loaded = () => {
        return (
          <div className='InnerCard'>
              <img src={userPre.profile[0].image} alt='Profile Image' className='ProfileImagePreview'/>
              <h3 className='CardUser'>{userPre.user[0].username}</h3>
              <p className='About'>About Me:</p>
              {userPre.profile[0].bio.length < 30 ? (
              <p className='CardBio'>{userPre.profile[0].bio}</p>
              ) : <p className='CardBio'>{userPre.profile[0].bio.substring(0, 30)}...</p> }
          </div>
        )
    }

  return (
    <div>
      {userPre ? loaded() : <p>Loading</p>}
    </div>
  )
}
