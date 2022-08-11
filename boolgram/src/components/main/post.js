import React, { useState } from 'react'
import {BsThreeDots} from 'react-icons/bs'
import { BsHeart } from 'react-icons/bs'
import {FaRegComment} from 'react-icons/fa'
import './main.css'

const Post = () => {
  return (
    <div>
        <div class="post border">
            <div class="post-3-row-header-grid">
                <div class="profile-circular-image-with-border-small">
                    <img src="http://placekitten.com/500/500"/>
                </div>
                <div class="left-aligned-text profile-name-text">Name</div>
                <div class="icon-align-right">
                    <BsThreeDots />
                </div>
            </div>
            <div class="fill">
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