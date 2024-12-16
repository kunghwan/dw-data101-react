import React from 'react'
import "./SInput.css"

const SInput = () => {
  return (
    <div className='si'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, unde. Dolorem recusandae hic nesciunt quidem alias itaque, dignissimos ea labore dolor sunt soluta non laboriosam a! Illo perferendis est iusto.</p>
      <input type="text" placeholder='이메일을 입력하세요.' />
      <div className='bt'><button >시작하기{">"}</button></div>
    </div>
  )
}

export default SInput
