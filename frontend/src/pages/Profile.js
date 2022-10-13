import { useState, useEffect, useContext } from 'react'
import ProfileHeader from '../components/ProfileHeader'
import ProfileBody from '../components/ProfileBody'
import Nav from '../components/Nav'
import AuthContext from '../components/Auth'

export default function Profile() {
  const [user, setUser] = useState(null)
  let userIn = useContext(AuthContext)
  const id = userIn.user.user_id
  const BASE_URL = `http://localhost:8000/${id}/`
  
  const getUser = async () => {
      try {
        const response = await fetch(BASE_URL);
        const userInfo = await response.json();
        setUser(userInfo)
      }catch(err){
        console.log(err)
      }
    }

    useEffect(()=>{
      getUser()
    }, [])
  
  const loaded = () => {
    return (
      <div>Profile
        <ProfileHeader user={user}/>
        <ProfileBody user={user}/>
      </div>
    )
  }
  const loading = () => {
    return (
      <h1>Loading</h1>
    )
  }

  return (
    <div>
      {user ? loaded() : loading()}
      <Nav/>
    </div>
  )
}
