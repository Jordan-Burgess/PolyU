import {useState, useEffect, useContext} from 'react'
import { Link } from 'react-router-dom';
import AuthContext from '../components/Auth'
import Nav from '../components/Nav'
import UserPreview from '../components/UserPreview'

export default function Partners() {
  
  const [users, setUsers] = useState()
  const userIn = useContext(AuthContext)
  const BASE_URL = `http://localhost:8000/` 
  

  const getUsers = async () => {
    try {
        const response = await fetch(BASE_URL);
        const userInfo = await response.json();
        setUsers(userInfo)
        console.log(users)
      }catch(err){
        console.log(err)
      }
    }

    // allUsers?.filter(user => user.id === userIn.user.user_id).map((user) =>
  useEffect(()=>{
    getUsers()
  }, [])
  
  const loaded = () => {
    return users?.filter(user => user.id !== userIn.user.user_id).map((user) => {
      return (
        <Link to={`/profile/${user.id}`}>
            <UserPreview user={user}/>
        </Link>
      );
    });
  };

  return (
    <div className='Partners'>
        <h2>All Users</h2>
        {users ? loaded() : <p>Nope</p>}
        <Nav/>
    </div>
  )
}
