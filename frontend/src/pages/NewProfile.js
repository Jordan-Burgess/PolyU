import '../styles/newprofile.css'
import { useState, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import AuthContext from '../components/Auth';

export default function NewProfile() {
    const {setFirstUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const {id} = useParams()
    const [profile, setProfile] = useState({
        image: "",
        banner: "",
        native_language: "",
        bio: "",
        user: id
    })
    const handleChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
      }
  
    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(`http://localhost:8000/${id}/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(profile),
        });
        setFirstUser(false)
        navigate(`/profile/${id}`)
    }

    return (
    <div className='NewPage'>
        <h2>New Profile</h2>
        <form className='NewForm' onSubmit={handleSubmit}>
            <label for='image'>Profile Image:
            <input
              type="text"
              name="image"
              onChange={handleChange}
              placeholder="http://..."
              required
            />
            </label>
            <label for='banner'>Banner Image:
            <input
              type="text"
              name="banner"
              placeholder='http://...'
              onChange={handleChange}
              required
            />
            </label>
            <label for='native_language'>Native Language:
            <input
              type="text"
              name="native_language"
              placeholder='Native Language'
              onChange={handleChange}
              required
            />
            </label>
            <label for='bio'>About Me:
            <textarea
              type="text"
              name="bio"
              placeholder='About Me'
              onChange={handleChange}
              required
              className='AboutMe'
            />
            
            </label>
            <input className='Submit' type='submit' value="Create Your Profile"/>
        </form>
    </div>
  )
}
