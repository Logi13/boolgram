import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/header/header';
import SideBar from './components/sidebar/sidebar';
import UserStories from './userStories/userStories'
import MainPostFeed from './components/main/main-feed';

import {STORIES_ENDPOINT_URL} from './endpoints';

function App() {
  let userProfile = {
    username: 'zirios',
    fullName: 'John Lioupas',
    profileImageUrl: 'http://placekitten.com/500/500'
  }
  let [stories, setStories] = useState(null);

  // will be run only once
  // in dev it will be run twice due to strict mode
  useEffect(() => {
    // Update the document title using the browser API
    if (!stories) {
      fetch(STORIES_ENDPOINT_URL)
      .then(response => {
        if(response.ok) {
          return response.json()
        }
        throw response;
      })
      .then(data => {
        setTimeout(() => {
          console.log("Stories fetched: ", data);
          setStories(data);
        })
      })
      .catch(error => {
        console.log("Error while fetching stories: ", error);
      });
    }
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  return (
    <div className="App">
      <Header />
      <div>
        <div class="main-container-2-col-grid">
        <div class="">
          <div class="posts-container-2-row-grid">
                  <UserStories userStories={stories}/>
                  <MainPostFeed />
              </div>
          </div>
          <SideBar />
        </div>
      </div>
      
    </div>
  );
}

export default App;
