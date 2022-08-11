import React, { useState } from 'react'
import { BsHeart } from 'react-icons/bs'
import {ImHome3} from 'react-icons/im'
import './header.css'

const Header = () => {
  return (
    <header class="header">
      <div className="header-layout-3-col-grid">
          <div class="logo"> Boolgram </div>
          <div class="searchbar"> 
            <input class="input" type="text" placeholder="Search"></input>
          </div>
          <div class="nav-menu"> 
            <BsHeart />
            <ImHome3 />
            <div class="profile-circular-image">
                <img src="http://placekitten.com/500/500"/>
            </div>
          </div>
      </div>
    </header>
  )
}


export default Header