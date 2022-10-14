import {useState, useContext} from 'react'
import AuthContext from '../components/Auth'

export default function Signup() {
    const { registerUser } = useContext(AuthContext)
    const [userForm, setUserForm] = useState({
        username: "",
        password: "",
        password2: "",
        email: "",
        first_name: "",
        last_name: ""
    })

    const handleChange = (e) => {
        setUserForm({ ...userForm, [e.target.name]: e.target.value });
      }

    const handleSubmit = async (e) => {
        e.preventDefault()
        registerUser(userForm.username, userForm.password, userForm.password2, userForm.email, userForm.first_name, userForm.last_name)
    }
  
    return (
    <div>Signup
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder='Username'
          onChange={handleChange}
          value={userForm.username}
          required
        />
        <input
          type="email"
          name="email"
          placeholder='E-mail Address'
          onChange={handleChange}
          value={userForm.email}
          required
        />
        <input
          type="text"
          name="first_name"
          placeholder='First Name'
          onChange={handleChange}
          value={userForm.first_name}
          required
        />
        <input
          type="text"
          name="last_name"
          placeholder='Last Name'
          onChange={handleChange}
          value={userForm.last_name}
          required
        />
        <input
          type="password"
          name="password"
          placeholder='Password'
          onChange={handleChange}
          value={userForm.password}
          required
        />
        <input
          type="password"
          name="password2"
          placeholder='Confirm Password'
          onChange={handleChange}
          value={userForm.password2}
          required
        />
        <p>{userForm.password2 !== userForm.password ? "Passwords do not match" : ""}</p>
        <input type='submit' value='Sign Up'/>
        </form>
    </div>
  )
}
