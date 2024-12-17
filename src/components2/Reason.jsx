import React from 'react'
import "./Reason.css"
import { Md10K } from "react-icons/md";

const Reason = () => {
  return (
    <div className='Return'>
      <h3>가입해야 하는 또 다른 이유</h3>
      <ul className='oi'>
        <li><button>TV로 즐기세요<Md10K/></button></li>
        <li><button>즐겨보는 콘텐츠를 저장해 오프리인<Md10K/></button></li>
        <li><button>ㅇㄹㄴㅇㄴㅇㄹㅇㄴㄹ<Md10K/></button></li>
        <li><button>ㅇㄴㄹㄴㅇㄹㅇㄴㄴㅇ<Md10K/></button></li>
      </ul>
    </div>
  )
}

export default Reason
