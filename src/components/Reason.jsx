import React from 'react'
import  "./Reason.css"
import { Md10K } from "react-icons/md";
import { Md10Mp } from "react-icons/md";
import { Md11Mp } from "react-icons/md";
import { Md123 } from "react-icons/md";
// 2번 반복 => 자바스크립트
const reasons = [
    {
        desc:'취향에 딱 맞는 이야기'
        ,Icon: Md10K

    },
    {
        desc:'언제든지 혜지 또는 전환 가능한 맴버십'
        ,Icon: Md10Mp

    },
    {
        desc:'아이들만을 위한 공간'
        ,Icon: Md11Mp

    },
    {
        desc:'스마트폰,태블릿,노트북,TV에서 이용 가능'
        ,Icon: Md123

    }
]
const Reason = () => {
  return (
    <div className='re'>
      <h3>가입해야 하는 또 다른 이유</h3>
      {/* <ul>
      <li>
        <div>
            <p>취향에 딱 맞는 이야기</p>
            <Md10K />
        </div>
      </li>
      <li>
        <div>
            <p>언제든지 혜지 또는 전환 가능한 맴버십</p>
            <Md10Mp />
        </div>
      </li>
      <li>
        <div>
            <p>아이들만을 위한 공간</p>
            <Md11Mp  />
        </div>
      </li>
      <li>
        <div>
            <p>스마트폰,태블릿,노트북,TV에서 이용 가능</p>
            <Md123 />
        </div>
      </li>
      </ul> */}
      <ul>
        {reasons.map(
            (r, i) => {
                return (
                    <li key={i}>
                    <div>
                        <p>{r.desc}</p>
                        <r.Icon />
                    </div>
                  </li>
                )
            }
        )}
      </ul>
    </div>
  )
}

export default Reason



// import React from 'react'
// const reasons = [
//     {desc: 1, x:1},
//     {desc: 2, x:2},
//     {desc: 3, x:3},
//     {desc: 4, x:4}
// ]

// const Reason = () => {
//   return (
//     <div>
//       <h1>Map {reasons.length}개</h1>
//       <ul>
//         {reasons.map(
//             (r,i)=>{
//             return(
//                 <li key={i}>{r.desc}</li>
//             )
//         })}
//       </ul>
//     </div>
//   )
// }

// export default Reason
