import React, { useState } from 'react'
import './sidebar.css'

import UserProfileImage from '../profileImages/profileImage'
import LinkButton from '../linkButton'

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
            <LinkButton buttonText="Follow" />
        </div>
    </div>
  )
}


export default ProfileSuggestion