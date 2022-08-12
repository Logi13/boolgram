import React, { useState } from 'react'
import './userStories.css'

import UserStoriesProfileComponent from '../components/profile/userStoriesProfileComponent';

const UserStories = (props) => {

    let stories = null;
    if(props.userStories) {
        // we have received user Stories
        // so display them
        stories = (
            <>{props.userStories.map((userStoryJson, index) => <UserStoriesProfileComponent 
                key={index.toString()} userStoryData={userStoryJson} />)}</>
        );
    } else {
        // we have no stories, so display loader
    }
  return (
    <div class="user-stories-area border">
        {stories} 
    </div>
  )
}


export default UserStories