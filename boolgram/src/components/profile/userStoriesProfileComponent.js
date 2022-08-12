import React, { useState } from 'react'
import './userStoriesProfileComponent.css'

import UserProfileImage from '../profileImages/profileImage'

const UserStoriesProfileComponent = (props) => {
    const profileData = props.userStoryData
  return (
    <div class="user-stories-align">
        <UserProfileImage 
            imgSrc={profileData.profile_picture}
            imgAltText={profileData.profile_name}
            size={55} // 35 for small
            border={true}
        />
        <p class="user-story-name">{profileData.profile_name}</p>
    </div>
  )
}


export default UserStoriesProfileComponent