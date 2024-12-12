import React from 'react'
import './Header.css'
import { SiNetflix } from "react-icons/si";
import { CiGlobe } from "react-icons/ci";

const Header = () => {
  return (
    <header>
     <button className='title'>
     <SiNetflix/>
     </button>
     <ul>
        <li><button className='bt1'><CiGlobe />
        언어</button></li>
        <li><button className='bt2'>로그인</button></li>
     </ul>
    </header>
  )
}

export default Header