import React from "react";
import "./storiesComponentLoader.css";

// credit of the spinner: https://contactmentor.com/how-to-add-loading-spinner-react-js/

const StoriesLoadingSpinner = () => {
  return (
    <div className="user-stories-area border">
      <div className="loading-spinner">
      </div>
    </div>
  );
}

export default StoriesLoadingSpinner