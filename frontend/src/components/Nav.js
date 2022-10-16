import '../styles/nav.css'
import {useContext} from 'react'
import { Link } from 'react-router-dom';
import AuthContext from "../components/Auth";

export default function Nav(selected) {
  let {user} = useContext(AuthContext)

  return (
    <div className='NavBar'>
        <Link to={`/profile/${user.user_id}`}>Profile</Link>
        <Link to='/chat'>Chat</Link>
        <Link to='/partners'>Partners</Link>
        <Link to='/events'>Events</Link>
    </div>
  )
}
