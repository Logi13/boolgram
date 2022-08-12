import React, { useState } from 'react'
import {BsThreeDots} from 'react-icons/bs'
import './userProfileComponent.css'

import UserProfileImage from '../profileImages/profileImage'

const UserProfileComponent = (props) => {
  return (
    <div class="post-3-row-header-grid">
        <UserProfileImage 
            imgSrc={"http://placekitten.com/500/500"}
            imgAltText={"cat"}
            size={35} // 35 for small
            border={true}
        />
        <div class="left-aligned-text profile-name-text">Name</div>
        <div class="icon-align-right">
            <BsThreeDots />
        </div>
    </div>
  )
}


export default UserProfileComponent