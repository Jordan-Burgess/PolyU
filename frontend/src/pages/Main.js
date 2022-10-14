import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import Profile from './Profile';
import Chat from './Chat';
import Partners from './Partners';
import Events from './Events';
import { useContext } from 'react';
import AuthContext from "../components/Auth";
import Edit from './Edit';
import Settings from './Settings';
import Signup from './Signup';

export default function Main() {
  console.log(AuthContext)
  let {user} = useContext(AuthContext)
  console.log('Test:', user)
  return (
      <div>
          <Routes>
            <Route path='/' element={user ? <Navigate to={`/profile/${user.user_id}`} /> : <Login/>} />
            <Route path='/signup' element={user ? <Navigate to={`/profile/${user.user_id}`} /> : <Signup/>} />
            <Route path='/profile/:id' element={!user ? <Navigate to="/" /> : <Profile/>} exact />
            {user ? <Route path={`/profile/${user.user_id}/edit`} element={!user ? <Navigate to="/" /> : <Edit/>} exact /> : null }
            {user ? <Route path={`/profile/${user.user_id}/settings`} element={!user ? <Navigate to="/" /> : <Settings/>} exact /> : null }
            <Route path='/chat' element={!user ? <Navigate to="/" /> : <Chat/>} exact />
            <Route path='/partners' element={!user ? <Navigate to="/" /> : <Partners/>} exact />
            <Route path='/events' element={!user ? <Navigate to="/" /> : <Events/>} exact />
          </Routes>
      </div>
  )
}
