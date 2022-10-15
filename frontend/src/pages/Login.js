import React from 'react'
import LoginCredentials from '../components/LoginCredentials'

export default function Login() {
  return (
      <div className="LoginPage">
        <div className='Title'>
          <h1>PolyU</h1>
          <p>Find and connect with a language exchange partner anywhere in the world. Share tips about your culture and teach each a new language.</p>
        </div>
        <LoginCredentials />
      </div>
  )
}
