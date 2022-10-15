import {useContext} from 'react'
import Nav from '../components/Nav'
import AuthContext from '../components/Auth'

export default function Settings() {
  const {logoutUser, user} = useContext(AuthContext)
  return (
    
    <div>Settings
        <form onSubmit={logoutUser}>
          <input type="Submit" value="Log Out"/>
        </form>
        <form>
          Delete Account
        </form>
        <Nav/>
    </div>
  )
}
