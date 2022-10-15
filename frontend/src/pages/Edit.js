import { useState, useEffect, useContext } from 'react'
import Nav from '../components/Nav'
import { useNavigate } from 'react-router-dom';
import AuthContext from '../components/Auth';

export default function Edit() {
    const navigate = useNavigate()
    const userIn = useContext(AuthContext)
    const owner = userIn.user.user_id
    const [profile, setProfile] = useState({
      image: "",
      banner: "",
      native_language: "",
      bio: "",
      user: owner
  })
    
    const BASE_URL = `http://localhost:8000/${owner}/`
    
    const getUser = async () => {
        try {
          const response = await fetch(BASE_URL);
          const userInfo = await response.json();
          setProfile(userInfo.profile[0])
        }catch(err){
          console.log(err)
        }
      }
  
      useEffect(()=>{
        getUser()
      }, [])
    

    const handleSubmit = async (e) => {
      e.preventDefault()
      const response = await fetch(`http://localhost:8000/${owner}/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(profile),
      });
      navigate(`/profile/${owner}`)
    } 
      
    const handleChange = (e) => {
      setProfile({ ...profile, [e.target.name]: e.target.value });
    }
    
    const loaded = () => {
      return (
        <div>
            <form onSubmit={handleSubmit}>
            <label for='image'>Profile Image
            <input
              type="text"
              name="image"
              onChange={handleChange}
              value={profile.image}
              required
            />
            </label>
            <label for='banner'>Banner Image
            <input
              type="text"
              name="banner"
              placeholder='Banner Image'
              onChange={handleChange}
              value={profile.banner}
              required
            />
            </label>
            <label for='native_language'>Native Language
            <input
              type="text"
              name="native_language"
              placeholder='Native Language'
              onChange={handleChange}
              value={profile.native_language}
              required
            />
            </label>
            <label for='bio'>About Me
            <input
              type="text"
              name="bio"
              placeholder='About Me'
              onChange={handleChange}
              value={profile.bio}
              required
            />
            </label>
            <input type="submit" value="Update Profile"/>

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
        {profile ? loaded() : <p>test</p>}
        <Nav/>
      </div>
    )
}
