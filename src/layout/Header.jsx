import React from 'react'
import './Header.css'
import { SiNetflix } from "react-icons/si";
import LangButton from './LangButton';

const Header = () => {
  return (
    <header>
     <button className='title'>
     <SiNetflix/>
     </button>
     <ul>
        <li> <LangButton /></li>
        <li><button className='bt2'>로그인</button></li>
     </ul>
    </header>
  )
}

export default Header
