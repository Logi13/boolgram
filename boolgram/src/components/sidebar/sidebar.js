import React, { useState } from 'react'
import './sidebar.css'

const SideBar = () => {
  return (
    <div class="body-sidebar-container-3-row-grid sidebar-visibility">
        <div>
            <div class="body-sidebar-header-container-3-col-grid">
            <div class="left-aligned-text">Image</div>
            <div class="left-aligned-text">Name</div>
            <div class="right-aligned-text">Settings</div>
            </div>
        </div>
        <div>
            <div class="body-sidebar-container-2-col-grid">
            <div class="left-aligned-text">Friend Suggestion</div>
            <div class="right-aligned-text"><b>Show All</b></div>
            </div>
        </div>
        <div>
            <div class="body-sidebar-container-3-col-grid">
                <div class="left-aligned-text">Image</div>
                <div>Name</div>
                <div class="right-aligned-text" style={{color: "#0066CC"}}>Follow</div>
            </div>
            <div class="body-sidebar-container-3-col-grid">
                <div class="left-aligned-text">Image</div>
                <div>Name</div>
                <div class="right-aligned-text" style={{color: "#0066CC"}}>Follow</div>
            </div>
            <div class="body-sidebar-container-3-col-grid">
                <div class="left-aligned-text">Image</div>
                <div>Name</div>
                <div class="right-aligned-text" style={{color: "#0066CC"}}>Follow</div>
            </div>
            <div class="body-sidebar-container-3-col-grid">
                <div class="left-aligned-text">Image</div>
                <div>Name</div>
                <div class="right-aligned-text" style={{color: "#0066CC"}}>Follow</div>
            </div>
        </div>
    </div>
  )
};

export default SideBar