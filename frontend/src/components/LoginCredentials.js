import { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
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
    <div className="LoginBox">
      <form className="LoginForm" onSubmit={handleSubmit}>
        <input
          className="LoginInput"
          type="text"
          name="username"
          placeholder='Username'
          onChange={handleChange}
          value={userInput.username}
          required
        />
        <input
          className="LoginInput"
          type="password"
          name="password"
          placeholder='Password'
          onChange={handleChange}
          value={userInput.password}
          required
        />
        <input className="LoginButton" type='submit' value='Log In'/>
      </form>
      <p className='NewAccount'>Don't have an account?<Link className="SignupLink" to='/signup'> Sign Up</Link></p>
    </div>
  )
}
