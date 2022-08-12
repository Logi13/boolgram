import React, { useState } from 'react'
import './sidebar.css'
import UserProfileImage from '../profileImages/profileImage'
const UserProfile = (props) => {
  const userProfileDetails = props.userProfileData
  return (
    <div>
        <div class="body-sidebar-header-container-3-col-grid">
        <UserProfileImage 
              imgSrc={userProfileDetails.profileImageUrl}
              imgAltText={"Some alt text"}
              size={35} // 35 for small
              border={false}
            />
        <div class="center-aligned-text profile-name-text">{userProfileDetails.username}</div>
        <div class="right-aligned-text">Settings</div>
        </div>
    </div>
  )
}


export default UserProfile