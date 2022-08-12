import React from "react";
import ContentLoader from 'react-content-loader'

// Credit for the content loader from the tutorial of the npmjs contentLoader page: https://www.npmjs.com/package/react-content-loader

const PostLoader = (props) => {
  return (
    <div class="post">
      <div class="border">
        <ContentLoader 
          width={700}
          height={500}
          viewBox="0 0 600 400"
          backgroundColor="#EFEFEF"
          foregroundColor="#ecebeb"
          style={{ width: '100%' }}>
          <circle cx="30" cy="30" r="30" />
          <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
          <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
          <rect x="0" y="60" rx="2" ry="2" width="600" height="650" />
        </ContentLoader>
      </div>
      
      <div class="border">
        <ContentLoader 
          width={700}
          height={500}
          viewBox="0 0 600 400"
          backgroundColor="#EFEFEF"
          foregroundColor="#ecebeb"
          style={{ width: '100%' }}>
          <circle cx="30" cy="30" r="30" />
          <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
          <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
          <rect x="0" y="60" rx="2" ry="2" width="600" height="650" />
        </ContentLoader>
      </div>
    </div>
  );
}

export default PostLoader