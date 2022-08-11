import React, { useState } from 'react'
import ProfileSuggestion from './profileSuggestion';
import './sidebar.css'
import UserProfile from './userProfile';

const SideBar = () => {
  return (
    <div class="body-sidebar-container-3-row-grid sidebar-visibility">
        <UserProfile />
        <div>
            <div class="body-sidebar-container-2-col-grid">
            <div class="left-aligned-text">Friend Suggestion</div>
            <div class="right-aligned-text"><b>Show All</b></div>
            </div>
        </div>
        <div>
            <ProfileSuggestion />
            <ProfileSuggestion />
            <ProfileSuggestion />
            <ProfileSuggestion />
        </div>
    </div>
  )
};

export default SideBar