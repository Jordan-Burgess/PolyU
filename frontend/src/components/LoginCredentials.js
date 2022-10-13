import { useState, useContext } from 'react'
import AuthContext from "../components/Auth";

export default function LoginCredentials() {
  let {loginUser} = useContext(AuthContext)
  const [userInput, setUserInput] = useState({ username: "", password: "" });
  function handleChange(e) {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(userInput)
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
