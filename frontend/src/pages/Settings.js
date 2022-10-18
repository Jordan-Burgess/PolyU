import '../styles/settings.css'
import {useContext} from 'react'
import Nav from '../components/Nav'
import AuthContext from '../components/Auth'
import { useNavigate } from "react-router-dom";

export default function Settings() {
  const navigate = useNavigate();
  const {logoutUser, user} = useContext(AuthContext)
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (window.confirm("Are you sure you want to Delete your account.\nAll your data will be lost. \nThis action cannot be undone.")){
      const response = await fetch(`https://polyu-backend.herokuapp.com/${user.user_id}/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
      });
      logoutUser()
    }
  } 
  
  return (
    
    <div>
        <div className='SettingsPage'>
        <h2>Settings</h2>
        <form onSubmit={logoutUser}>
          <input className='Button LogOut' type="Submit" value="Log Out"/>
        </form>
        <form onSubmit={handleSubmit}>
          <input className='Button Delete' type="Submit" value="Delete Account"/>
        </form>
        </div>
        <Nav/>
    </div>
  )
}
