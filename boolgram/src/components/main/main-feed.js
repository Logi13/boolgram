import React, { useState, useEffect } from 'react'
import './main.css'
import Post from './post'



const MainPostFeed = (props) => {
  let postList = null;

  if(props.userPosts) {
    
    postList = (
      <>{props.userPosts.map((userPostJson, index) => <Post
        key={index.toString()} userPostData={userPostJson} />)}</>)
  }

  return (
    <div>
    {postList}
    </div>
  )
}


export default MainPostFeed