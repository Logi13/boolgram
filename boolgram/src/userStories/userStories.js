import React, { useState } from 'react'
import './userStories.css'

const UserStories = () => {
  return (
    <div class="body-stories-area border">
        <div class="body-stories-2-row-grid">
            <div class="profile-circular-image-with-border">
                <img src="http://placekitten.com/500/500"/>
            </div>
            <div class="center-aligned-text">Name</div>
        </div>

        <div class="body-stories-2-row-grid">
            <div class="profile-circular-image-with-border">
                <img src="http://placekitten.com/500/500"/>
            </div>
            <div class="center-aligned-text">Name</div>
        </div>

        <div class="body-stories-2-row-grid">
            <div class="profile-circular-image-with-border">
                <img src="http://placekitten.com/500/500"/>
            </div>
            <div class="center-aligned-text">Name</div>
        </div>
        
    </div>
  )
}


export default UserStories