import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Profile from './Profile';
import Chat from './Chat';
import Partners from './Partners';
import Events from './Events';

export default function Main() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/chat' element={<Chat/>} />
        <Route path='/partners' element={<Partners/>} />
        <Route path='/events' element={<Events/>} />
      </Routes>
    </div>
  )
}
