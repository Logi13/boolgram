import React, { useState } from 'react'
import './main.css'
import Post from './post'

import {FEED_POST_ENDPOINT_URL} from '../../endpoints';

const MainPostFeed = () => {
  return (
    <div>
    <Post />
    <Post />
    </div>
  )
}


export default MainPostFeed