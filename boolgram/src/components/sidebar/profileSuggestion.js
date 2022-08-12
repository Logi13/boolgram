import React, { useState } from 'react'
import './sidebar.css'

import UserProfileImage from '../profileImages/profileImage'

const ProfileSuggestion = () => {
  return (
    <div>
        <div class="body-sidebar-container-3-col-grid">
            <UserProfileImage 
              imgSrc="http://placekitten.com/500/500"
              imgAltText={"Some alt text"}
              size={35} // 35 for small
              border={false}
            />
            <div class="profile-name-text">Name</div>
            <div class="right-aligned-text" style={{color: "#0066CC"}}>Follow</div>
        </div>
    </div>
  )
}


export default ProfileSuggestion