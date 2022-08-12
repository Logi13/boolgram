import React, { useState } from 'react'
import ProfileSuggestion from './profileSuggestion';
import './sidebar.css'
import UserProfile from './userProfile';

const SideBar = (props) => {
  let storiesList = null;

  if(props.userStories) {
    const userStories = props.userStories;
    storiesList = (
      userStories.map((userStoryJson, index) => <ProfileSuggestion
        key={index.toString()} userStoryData={userStoryJson}/>)
    );
  }
  
  return (
    <div class="body-sidebar-container-3-row-grid sidebar-visibility">
        <UserProfile userProfileData={props.userData}/>
        <div>
            <div class="body-sidebar-container-2-col-grid">
            <div class="left-aligned-text info-text-no-padding">Suggestions For You</div>
            <div class="right-aligned-text" style={{cursor:"pointer"}}><b>See All</b></div>
            </div>
        </div>
        {storiesList}
        <p class="info-text">&#169; {new Date().getUTCFullYear()} BOOLGRAM FROM BOOLEAN</p>
    </div>
  )
};

export default SideBar