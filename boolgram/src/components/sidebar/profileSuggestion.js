

import React, { useState } from 'react'
import './sidebar.css'

const ProfileSuggestion = () => {
  return (
    <div>
        <div class="body-sidebar-container-3-col-grid">
        <div class="profile-circular-image">
                <img src="http://placekitten.com/500/500"/>
            </div>
            <div class="profile-name-text">Name</div>
            <div class="right-aligned-text" style={{color: "#0066CC"}}>Follow</div>
        </div>
    </div>
  )
}


export default ProfileSuggestion