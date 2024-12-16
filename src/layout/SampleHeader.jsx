import React from 'react'
import "./SampleHeader.css"
import Componentname from './Componentname';
import { SiNetflix } from "react-icons/si";

const SampleHeader = () => {
  return (
    <header id='header'>
         <div className='net'><SiNetflix/></div>
          <ul>
            <li><Componentname/></li>
            <li><button className='login'>로그인</button></li>
          </ul>
    </header>
  )
}

export default SampleHeader
    
    
