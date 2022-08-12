import React from "react";
import ContentLoader from 'react-content-loader'

const SuggestionsLoader = (props) => {
  return (
    <div class="border">
      <ContentLoader 
        height={500}
        width={250}
        backgroundColor="#EFEFEF"
        foregroundColor="#ecebeb" >
        <circle cx="30" cy="30" r="30" />
        <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
        <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />

        <circle cx="30" cy="100" r="30" />
        <rect x="80" y="87" rx="4" ry="4" width="300" height="13" />
        <rect x="80" y="110" rx="3" ry="3" width="250" height="10" />

        <circle cx="30" cy="170" r="30" />
        <rect x="80" y="157" rx="4" ry="4" width="300" height="13" />
        <rect x="80" y="180" rx="3" ry="3" width="250" height="10" />
      </ContentLoader>
    </div>
  );
}

export default SuggestionsLoader