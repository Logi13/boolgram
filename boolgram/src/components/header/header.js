import React, { useState } from 'react'
import { BsHeart } from 'react-icons/bs'
import {ImHome3} from 'react-icons/im'
import UserProfileImage from '../profileImages/profileImage'
import './header.css'
import Logo from './logo'

const Header = () => {
  return (
    <header class="header border-bottom">
      <div className="header-layout-3-col-grid">
          <Logo />
          <div class="searchbar"> 
            <input class="input" type="text" placeholder="Search"></input>
          </div>
          <div class="nav-menu"> 
            <BsHeart />
            <ImHome3 />
            <UserProfileImage 
              imgSrc="http://placekitten.com/500/500"
              imgAltText={"Some alt text"}
              size={30} // 35 for small
              border={false}
            />
          </div>
      </div>
    </header>
  )
}


export default Header