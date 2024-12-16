import React from 'react'
import "./NInput.css"

const NInput = () => {
  return (
    <div className='ni'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, ducimus itaque? Quibusdam dignissimos quasi enim saepe perferendis porro consequuntur laboriosam odit illum! Harum ipsam delectus suscipit cumque rerum voluptatem odio.</p>
      <input type="text" id='email' placeholder='이메일을 입력하세요' />
     <div className='btn'> 
        <button>시작하기 {">"}</button>
     </div>
    </div>
  )
}

export default NInput
