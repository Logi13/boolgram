import React, { useState } from 'react'
import './sidebar.css'
import UserProfileImage from '../profileImages/profileImage'
const UserProfile = () => {
  return (
    <div>
        <div class="body-sidebar-header-container-3-col-grid">
        <UserProfileImage 
              imgSrc="http://placekitten.com/500/500"
              imgAltText={"Some alt text"}
              size={35} // 35 for small
              border={false}
            />
        <div class="center-aligned-text profile-name-text">Name</div>
        <div class="right-aligned-text">Settings</div>
        </div>
    </div>
  )
}


export default UserProfile