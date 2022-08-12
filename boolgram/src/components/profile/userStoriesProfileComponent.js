import React, { useState } from 'react'
import './userStoriesProfileComponent.css'

const UserStoriesProfileComponent = (props) => {
    const profileData = props.userStoryData
  return (
    <div class="user-stories-align">
        <div class="profile-circular-image-with-border">
            <img src={profileData.profile_picture} alt={profileData.profile_name}/>
        </div>
        <div class="user-story-name">{profileData.profile_name}</div>
    </div>
  )
}


export default UserStoriesProfileComponent