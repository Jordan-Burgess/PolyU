import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

export default function LoginCredentials() {
  const navigate = useNavigate()
  const [userInput, setUserInput] = useState({ username: "", password: "" });
  function handleChange(e) {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/profile')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder='Username'
          onChange={handleChange}
          value={userInput.username}
          required
        />
        <input
          type="password"
          name="password"
          placeholder='Password'
          onChange={handleChange}
          value={userInput.password}
          required
        />
        <input type='submit' value='Log In'/>
      </form>
      <p>Don't have an account?<a href="#"> Sign Up</a></p>
    </div>
  )
}
