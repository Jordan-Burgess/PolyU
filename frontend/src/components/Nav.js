import React from 'react'
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div>
        <Link to='/'>Profile</Link>
        <Link to='/chat'>Chat</Link>
        <Link to='/partners'>Partners</Link>
        <Link to='/events'>Events</Link>
    </div>
  )
}
