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
import NewProfile from './NewProfile';

export default function Main() {
  console.log(AuthContext)
  let {user, firstUser} = useContext(AuthContext)
  console.log('Test:', user)
  console.log('First: ', firstUser)
  return (
      <div>
          <Routes>
            <Route path='/' element={user && !firstUser ? <Navigate to={`/profile/${user.user_id}`} /> : <Login/>} />
            <Route path='/signup' element={user && !firstUser ? <Navigate to={`/profile/${user.user_id}`} /> : <Signup/>} />
            <Route path='/profile/:id' element={!user ? <Navigate to="/" /> : <Profile/>} exact />
            {user && firstUser ? <Route path={`/profile/new/:id`} element={!user ? <Navigate to="/" /> : <NewProfile/>} exact /> : null }
            {user ? <Route path={`/profile/${user.user_id}/edit`} element={!user ? <Navigate to="/" /> : <Edit/>} exact /> : null }
            {user ? <Route path={`/profile/${user.user_id}/settings`} element={!user ? <Navigate to="/" /> : <Settings/>} exact /> : null }
            <Route path='/chat' element={!user ? <Navigate to="/" /> : <Chat/>} exact />
            <Route path='/partners' element={!user ? <Navigate to="/" /> : <Partners/>} exact />
            <Route path='/events' element={!user ? <Navigate to="/" /> : <Events/>} exact />
          </Routes>
      </div>
  )
}
