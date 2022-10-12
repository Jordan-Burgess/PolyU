import './App.css';
import { createContext, useState, useEffect } from 'react';
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext()
export default AuthContext;

export const App = ({children}) => {
  const [authTokens, setAuthTokens] = useState(() => 
    localStorage.getItem('authTokens')
    ? JSON.parse(localStorage.getItem('authTokens'))
    : null
  )
  const [user, setUser] = useState(() => 
    localStorage.getItem('authTokes')
    ? jwt_decode(localStorage.getItem('authTokens'))
    : null
  )
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const loginUser = async(username, password) => {
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
      navigate('profile')
    }else{
      console.log('Fetch Error')
    }
  }

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
    loginUser,
    logoutUser
  }

  useEffect(() => {
    if (authTokens) {
      setUser(jwt_decode(authTokens.access))
    }
    setLoading(false);
  }, [authTokens, loading])
  
  return (
    <AuthContext.Provider value={contextData}>
      <div className="App">
        {loading ? null : children}
      </div>
    </AuthContext.Provider>
  );
}
