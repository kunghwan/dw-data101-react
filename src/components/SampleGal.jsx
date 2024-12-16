import React from 'react'
import "./SampleGal.css"

const SampleGal = () => {
  return (
    <div id='wrap'>
      <img src={img}/>
      <button className='bt1 l'>{"<"}</button>
      <button className='bt1 r'>{">"}</button>
      <div className='txts'>
        <h1>넷플릭스</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint consectetur cupiditate ipsam ducimus explicabo voluptates beatae, perspiciatis at itaque sed dolore labore temporibus eos ipsum assumenda deserunt incidunt harum enim!</p>
      </div>
    </div>
  )
}

export default SampleGal

const img = "https://picsum.photos/50/50?random=1"