import React from 'react'
import { Link } from 'react-router-dom'
import './Profile.css'

const Profile = () => {
  return (
    <div class="profile-flex"><h1>Profile</h1>
        <Link to ={"/About"}><button>GO TO ABOUT</button></Link>
    </div>
  )
}

export default Profile