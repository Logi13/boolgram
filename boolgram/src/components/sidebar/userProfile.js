import React, { useState } from 'react'
import './sidebar.css'

const UserProfile = () => {
  return (
    <div>
        <div class="body-sidebar-header-container-3-col-grid">
        <div class="profile-circular-image">
            <img src="http://placekitten.com/500/500"/>
        </div>
        <div class="center-aligned-text profile-name-text">Name</div>
        <div class="right-aligned-text">Settings</div>
        </div>
    </div>
  )
}


export default UserProfile