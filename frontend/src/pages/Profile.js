import { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import ProfileHeader from '../components/ProfileHeader'
import ProfileBody from '../components/ProfileBody'
import Nav from '../components/Nav'
import AuthContext from '../components/Auth';

export default function Profile() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const {id} = useParams()
  const userIn = useContext(AuthContext)
  const {firstUser} = useContext(AuthContext)
  const BASE_URL = `http://localhost:8000/${id}/`
  const isOwner = userIn.user.user_id == id 
  

  const getUser = async () => {
      try {
        const response = await fetch(BASE_URL);
        const userInfo = await response.json();
        setUser(userInfo)
        console.log(isOwner)
      }catch(err){
        console.log(err)
      }
    }

    // useEffect(()=>{
    //   console.log('Profile: ',firstUser)
    //   navigate(`/profile/new/${id}`)
    // }, [firstUser])

    useEffect(()=>{
      getUser()
    }, [id])
  
  const loaded = () => {
    return (
      <div>Profile
        <ProfileHeader user={user} isOwner={isOwner} id={id} userIn={userIn.user.user_id}/>
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
