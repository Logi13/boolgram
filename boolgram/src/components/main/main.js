import React, { useState } from 'react'
import UserStories from '../../userStories/userStories'
import MainPostFeed from './main-feed'
import './main.css'

const Main = () => {
  return (
    <div class="">
        <div class="posts-container-2-row-grid">
            <UserStories />
            <MainPostFeed />
        </div>
    </div>
  )
}


export default Main