import {useState, useEffect, useContext} from 'react'
import AuthContext from '../components/Auth'
import Nav from '../components/Nav'
import UserPreview from '../components/UserPreview'

export default function Partners() {
  
  const [allUsers, setAllUsers] = useState()
  const userIn = useContext(AuthContext)
  const BASE_URL = `http://localhost:8000/` 
  

  const getUsers = async () => {
      try {
        const response = await fetch(BASE_URL);
        const userInfo = await response.json();
        setAllUsers(userInfo)
        console.log(userInfo)
        console.log(allUsers)
      }catch(err){
        console.log(err)
      }
    }

  useEffect(()=>{
    getUsers()
  }, [])
  
  const loaded = () => {
    return allUsers?.filter(user => user.id === userIn.user.user_id).map((user) => {
      const handleClick = () => {

      }
      
      return (
          <a href="#" onClick={handleClick}>
            <UserPreview user={user}/>
          </a>
      );
    });
  };

  const loading = () => {
    return (
      <h1>Loading</h1>
    )
  }

  return (
    <div>Partners
        {allUsers ? loaded() : loading()}
        <Nav/>
    </div>
  )
}
