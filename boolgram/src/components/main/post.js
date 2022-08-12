import React, { useState } from 'react'

import { BsHeart } from 'react-icons/bs'
import {FaRegComment} from 'react-icons/fa'
import UserProfileComponent from '../profile/userProfileComponent'
import './main.css'

const Post = (props) => {
  return (
    <div>
        <div class="post border">
            <UserProfileComponent />
            <div class="">
                <img src="http://placekitten.com/500/500"/>
            </div>
            <div class="comment-icons"> 
                <BsHeart />
                <FaRegComment />
            </div>
            <div class="comment-section">
                <div class="profile-circular-image">
                    <img src="http://placekitten.com/500/500"/>
                </div>
                <div class="user-post-comment">Some text goes here</div>
            </div>
            <div className="post-comment"><b>Someone</b> You look very beautiful</div>
        </div>
    </div>
  )
}


export default Post