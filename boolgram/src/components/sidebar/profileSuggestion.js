import React, { useState } from 'react'
import './sidebar.css'

import UserProfileImage from '../profileImages/profileImage'

const ProfileSuggestion = (props) => {
  return (
    <div>
        <div class="body-sidebar-container-3-col-grid">
            <UserProfileImage 
              imgSrc={props.userStoryData.profile_picture}
              imgAltText={"Some alt text"}
              size={35} // 35 for small
              border={false}
            />
            <div class="profile-name-text">{props.userStoryData.profile_name}</div>
            <div class="right-aligned-text" style={{color: "#0066CC"}}>Follow</div>
        </div>
    </div>
  )
}


export default ProfileSuggestion