import {useContext} from 'react'
import Nav from '../components/Nav'
import AuthContext from '../components/Auth'

export default function Settings() {
  const {logoutUser, user} = useContext(AuthContext)
  return (
    <div>Settings
        <form>
          Deactivate Account
        </form>
        <Nav/>
    </div>
  )
}
