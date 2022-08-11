import React, { useState } from 'react'
import './main.css'

const Main = () => {
  return (
    <div class="">
        <div class="body-main-container-2-row-grid">
            <div class="body-stories-area border">
                <div class="body-stories-2-row-grid">
                    <div class="circular_image">
                        <img src="http://placekitten.com/500/500"/>
                    </div>
                    <div class="center-aligned-text">Name</div>
                </div>

                <div class="body-stories-2-row-grid">
                    <div class="circular_image">
                        <img src="http://placekitten.com/500/500"/>
                    </div>
                    <div class="center-aligned-text">Name</div>
                </div>

                <div class="body-stories-2-row-grid">
                    <div class="circular_image">
                        <img src="http://placekitten.com/500/500"/>
                    </div>
                    <div class="center-aligned-text">Name</div>
                </div>
                
            </div>
            <div class="body-main-post-container-3-row-grid border">
            <div>
                <div class="body-main-post-header-container-3-col-grid">
                <div>Image</div>
                <div class="left-aligned-text">Name</div>
                <div class="right-aligned-text">Settings</div>
                </div>
            </div>
            <div class="">
                Image Section
            </div>
            <div class="">
                Comments Section
            </div>
            </div>
            
        </div>
    </div>
  )
}


export default Main