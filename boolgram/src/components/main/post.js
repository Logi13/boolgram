import React, { useState } from 'react'

import { BsHeart } from 'react-icons/bs'
import {FaRegComment} from 'react-icons/fa'
import UserProfileComponent from '../profile/userProfileComponent'
import UserProfileImage from '../profileImages/profileImage'
import LinkButton from '../linkButton'
import './main.css'

const Post = (props) => {
    let [showAllComments, setShowAllComments] = useState(false);
    

    const postData = props.userPostData;
    const comments = postData.comments;
    const commentsCount = comments.length;
    const likes = postData.likes;
    const likesCount = likes.length;

    // Components
    let likeComponent = null;
    let commentsComponent = null;


    // Date Calculations
    const postDate = Date.parse(postData.date.date)
    // Calculate the time passed since post was made
    const calculateTimeSincePost = () => {
        let delta = Math.abs(Date.now() - postDate);

        // calculate (and subtract) whole days
        let days = Math.floor(delta / 86400); // 86400 seconds in a day
        delta -= days * 86400;
    
        // calculate (and subtract) whole hours
        let hours = Math.floor(delta / 3600) % 24; // 3600 seconds in an hour, 24 hours per day
        delta -= hours * 3600;
    
        // calculate (and subtract) whole minutes
        let minutes = Math.floor(delta / 60) % 60; // 60 seconds in a min, 60 min in an hour
        delta -= minutes * 60;

        return `Post made: ${days} days, ${hours} hours, ${minutes} minutes ago`;
    }

    // like Component Operations
    if (likesCount > 0) {
        const lastLikedBy = likes[likesCount - 1];
        let likedText;
        if(likesCount > 1) {
            likedText = (<p class="center-aligned-text">Liked by <b>{lastLikedBy.username}</b> and <b>{likesCount - 1} others</b>.</p>)
        } else {
            likedText = (<p class="center-aligned-text">Liked by <b>{lastLikedBy.username}</b></p>);
        }
        likeComponent = (
            <>
                <UserProfileImage 
                    imgSrc={lastLikedBy.profile_picture} 
                    imgAltText={lastLikedBy.username}
                    size={25}
                    showBorder={false}  

                />
                {likedText}
            </>
        )
    }


    // Comment Component Operations
    const handleShowAllClick = event => {
        setShowAllComments(true);
        diplayComments();
    };

    const handleHideAllClick = event => {
        setShowAllComments(false);
        diplayComments();
    };

    const diplayComments = () => {
        if (commentsCount > 0) {
            if (commentsCount === 0 ) {
                // message be the first to comment
                commentsComponent = (
                    <div className="post-comment">
                        Be the first to comment!
                    </div>
                );
            } else {
                // display the comments
                if(showAllComments) {
                    commentsComponent = (<>{comments.map((comment, index) => {
                        return <div key={index.toString()} className="post-comment"><b>{comment.username}</b> {comment.text}</div>;
                      })} <div class="post-comment show-all-comments-message" onClick={handleHideAllClick}>Hide all {commentsCount} comments.</div></>)
                } else {
                    commentsComponent = (<div class="post-comment show-all-comments-message" onClick={handleShowAllClick}>Show all {commentsCount} comments.</div>);
                }
            }
        }
    }

    diplayComments();

    return (
        <div>
            <div class="post border">
                <UserProfileComponent 
                    userProfileImage={postData.profile_picture}
                    userProfileName={postData.profile_name}
                    userProfileFullName={postData.profile_fullname}
                />
                <img src={postData.post_image} alt={postData.post_text}/>
                
                <div class="comment-icons"> 
                    <BsHeart />
                    <FaRegComment />
                </div>
                <div class="comment-section">
                    {likeComponent}
                </div>
                {commentsComponent}
                <p class="info-text">{calculateTimeSincePost()}</p>
                <div className='add-comment-row border-top vertical-padding'>
                    <p>Add a comment</p>
                    <div className="fill"></div>
                    <LinkButton buttonText="Post Comment" />
                </div>
            </div>
        </div>
    )
}


export default Post