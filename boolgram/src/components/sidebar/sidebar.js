import React, { useState } from 'react'
import SuggestionsLoader from '../loaders/suggestionSidebarLoader';
import ProfileSuggestion from './profileSuggestion';
import './sidebar.css'
import UserProfile from './userProfile';

const SideBar = (props) => {
  
  let isDataLoading = props.isLoading;

  const loadComponent = () => {
    let storiesList = null;
    if(isDataLoading) {
      storiesList = <SuggestionsLoader />
    } else {
      if(props.userStories) {
        const userStories = props.userStories;
        storiesList = (
          userStories.map((userStoryJson, index) => <ProfileSuggestion
            key={index.toString()} userStoryData={userStoryJson}/>)
        );
      }
    }
    return storiesList;
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
        {loadComponent()}
        <p class="info-text">&#169; {new Date().getUTCFullYear()} BOOLGRAM FROM BOOLEAN</p>
    </div>
  )
};

export default SideBar