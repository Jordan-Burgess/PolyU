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
          <div>
              {userPre.profile[0].image}
              {userPre.user[0].username}
              <p>About Me:</p>
              {userPre.profile[0].bio}
          </div>
        )
    }

  return (
    <div>
      {userPre ? loaded() : <p>Loading</p>}
    </div>
  )
}
