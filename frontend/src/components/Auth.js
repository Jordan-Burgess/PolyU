import { createContext, useState, useEffect } from 'react';
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext()
export default AuthContext;

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [authTokens, setAuthTokens] = useState(() => 
    localStorage.getItem('authTokens')
    ? JSON.parse(localStorage.getItem('authTokens'))
    : null
  )
  const [user, setUser] = useState(() => 
    localStorage.getItem('authTokens')
    ? jwt_decode(localStorage.getItem('authTokens'))
    : null
  )
  const navigate = useNavigate();

  const loginUser = async({username, password}) => {
    const response = await fetch("http://localhost:8000/token/", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({username, password})
    })
    const data = await response.json();
    if (response.status === 200) {
      setAuthTokens(data)
      setUser(jwt_decode(data.access));
      localStorage.setItem('authTokens', JSON.stringify(data))
      console.log('Auth: ',user)
    //   navigate('profile')
    }else{
      console.log('Fetch Error')
    }
  }

  const registerUser = async (username, password, password2, email, first_name, last_name) => {
    const response = await fetch("http://localhost:8000/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password,
        password2,
        email,
        first_name,
        last_name
      })
    });
    if (response.status === 201) {
      loginUser({username, password})
      navigate('/partners');
    } else {
      console.log("Something went wrong!");
    }
  };

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem('authTokens');
    navigate('/')
  }

  const contextData = {
    user,
    setUser,
    authTokens,
    setAuthTokens,
    registerUser,
    loginUser,
    logoutUser
  }

  console.log("Auth2:", user)
  useEffect(() => {
    setLoading(true)
    if (authTokens) {
      setUser(jwt_decode(authTokens.access))
    }
    setLoading(false)
  }, [authTokens])

  if(loading) return <p>Loading</p>
  
  return (
    <AuthContext.Provider value={contextData}>
        {children}
    </AuthContext.Provider>
  );
  
}