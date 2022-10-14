import { useState, useEffect, useContext } from 'react'
import Nav from '../components/Nav'
import AuthContext from '../components/Auth';

export default function Edit() {
    const [user, setUser] = useState(null)
    const userIn = useContext(AuthContext)
    const owner = userIn.user.user_id
    const BASE_URL = `http://localhost:8000/${owner}/`
    
    const getUser = async () => {
        try {
          const response = await fetch(BASE_URL);
          const userInfo = await response.json();
          setUser(userInfo.profile[0])
        }catch(err){
          console.log(err)
        }
      }
  
      useEffect(()=>{
        getUser()
      }, [])
    
    const handleChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
    
    const loaded = () => {
      return (
        <div>
            <form>
            <label for='image'>Profile Image
            <input
              type="text"
              name="image"
              onChange={handleChange}
              value={user.image}
              required
            />
            </label>
            <label for='banner'>Banner Image
            <input
              type="text"
              name="banner"
              placeholder='Banner Image'
              onChange={handleChange}
              value={user.banner}
              required
            />
            </label>
            <label for='native_language'>Native Language
            <input
              type="text"
              name="native_language"
              placeholder='Native Language'
              onChange={handleChange}
              value={user.native_language}
              required
            />
            </label>
            <label for='bio'>About Me
            <input
              type="text"
              name="bio"
              placeholder='About Me'
              onChange={handleChange}
              value={user.bio}
              required
            />
            </label>

            </form>
        </div>
      )
    }
    // const loading = () => {
    //   return (
    //     <h1>Loading</h1>
    //   )
    // }
  
    return (
      <div>
        Edit
        {user ? loaded() : <p>test</p>}
        <Nav/>
      </div>
    )
}
