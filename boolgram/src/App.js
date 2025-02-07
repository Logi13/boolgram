import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/header/header';
import SideBar from './components/sidebar/sidebar';
import UserStories from './components/userStories/userStories'
import MainPostFeed from './components/main/main-feed';
import StoriesLoadingSpinner from './components/loaders/storiesComponentLoader';
import PostLoader from './components/loaders/postComponentLoader';

import {STORIES_ENDPOINT_URL} from './endpoints';
import {FEED_POST_ENDPOINT_URL} from './endpoints';

function App() {
  // User profile Data
  let userProfile = {
    username: 'zirios',
    fullName: 'John Lioupas',
    profileImageUrl: 'http://placekitten.com/500/500'
  }

  // States
  const [stories, setStories] = useState(null);
  const [posts, setPosts] = useState(null);
  const [isStoriesLoading, setIsStoriesLoading] = useState(false);
  const [isPostsLoading, setIsPostsLoading] = useState(false);
  const [isSuggestionsLoading, setIsSuggestionsLoading] = useState(false);

  // Fetch from APIU functions
  const getPosts = async () => {
    fetch(FEED_POST_ENDPOINT_URL)
    .then(response => {
      if(response.ok) {
        return response.json()
      }
      throw response;
    })
    .then(data => {
      setTimeout(() => {
        setPosts(data);
        setIsPostsLoading(false);
        setIsSuggestionsLoading(false);
      })
    })
    .catch(error => {
      console.log("Error while fetching stories: ", error);
    });
  };

  const getStories = async () => {
    fetch(STORIES_ENDPOINT_URL)
      .then(response => {
        if(response.ok) {
          return response.json()
        }
        throw response;
      })
      .then(data => {
        setTimeout(() => {
          // console.log("Stories fetched: ", data);
          setStories(data);
          setIsStoriesLoading(false);
        })
      })
      .catch(error => {
        console.log("Error while fetching stories: ", error);
      });
  }

  // will be run only once
  // in dev it will be run twice due to strict mode
  useEffect(() => {
    setIsStoriesLoading(true);
    setIsPostsLoading(true);
    setIsSuggestionsLoading(true);
    // Update the document title using the browser API
    if (!stories) {
      getStories();
    }

    if (!posts) {
      getPosts()
    }
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  return (
    <div className="App">
      <Header />
      <div>
        <div class="main-container-2-col-grid">
          <div class="posts-container-2-row-grid">
            {isStoriesLoading ? <StoriesLoadingSpinner /> : <UserStories userStories={stories}/>}
            {isPostsLoading ? <PostLoader /> : <MainPostFeed userPosts={posts}/>}
          </div>
          <SideBar userData={userProfile} userStories={stories} isLoading={isSuggestionsLoading}/>
        </div>
      </div>
    </div>
  );
}

export default App;
