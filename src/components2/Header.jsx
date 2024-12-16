import React from 'react'
import "./Header.css"
import { RiNetflixFill } from "react-icons/ri";
import { IoLanguageOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className='T'>
      <button className='Ri'><RiNetflixFill /></button>
      <ul className='title'>
        <li><button className='bt1'><IoLanguageOutline />언어</button></li>
        <li><button className='bt2'>로그인</button></li>
      </ul>
    </div>
  )
}

export default Header
