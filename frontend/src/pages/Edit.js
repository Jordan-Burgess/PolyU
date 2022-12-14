import '../styles/edit.css'
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
    
    const BASE_URL = `https://polyu-backend.herokuapp.com/${owner}/`
    
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
      const response = await fetch(`https://polyu-backend.herokuapp.com/${owner}/`, {
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
            <form className='EditForm' onSubmit={handleSubmit}>
            <label for='image'>Profile Image:
              <input
              type="text"
              name="image"
              onChange={handleChange}
              value={profile.image}
              required
            />
            </label>
            <label for='banner'>Banner Image:
            <input
              type="text"
              name="banner"
              placeholder='Banner Image'
              onChange={handleChange}
              value={profile.banner}
              required
            />
            </label>
            <label for='native_language'>Native Language:
            <input
              type="text"
              name="native_language"
              placeholder='Native Language'
              onChange={handleChange}
              value={profile.native_language}
              required
            />
            </label>
            <label for='bio'>About Me:
            <textarea
              type="text"
              name="bio"
              placeholder='About Me'
              onChange={handleChange}
              value={profile.bio}
              required
              className='AboutMe'
            />
            </label>
            <input className='Submit' type="submit" value="Update Profile"/>

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
        <div className='EditPage'>
        <h2>Edit Your Profile</h2>
        {profile ? loaded() : <p>test</p>}
        </div>
        <Nav/>
      </div>
    )
}
