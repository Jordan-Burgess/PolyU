import React from 'react'
import Nav from '../components/Nav'
import ProfileHeader from '../components/ProfileHeader'
import ProfileBody from '../components/ProfileBody'

export default function Profile() {
  return (
    <div>Profile
      <ProfileHeader/>
      <ProfileBody/>
      <Nav/>
    </div>
  )
}
