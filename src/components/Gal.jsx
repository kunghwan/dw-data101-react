import React from 'react'
import "./Gal.css"

const Gal = () => {
  return (
    <div id='gal'>
        <div className='wrap'>
            <img className='ocean' src={img} />
            <button className='chev l'>{"<"}</button>
            <button className='chev r'>{">"}</button>
            <div className='txts'>
                <h1>트렁크</h1>
                <p>2024</p>
            </div>
        </div>
    </div>
  )
}

export default Gal
 
 
 const img = "https://media.istockphoto.com/id/2155640170/ko/%EC%82%AC%EC%A7%84/%ED%83%9C%ED%8F%89%EC%96%91-%ED%91%9C%EB%A9%B4%EC%9D%98-%EB%82%9C%EA%B8%B0%EB%A5%98-%EB%B0%94%EB%8B%A4-%ED%8C%A8%ED%84%B4.jpg?s=612x612&w=is&k=20&c=JfgHZVxRQKjATXWqaozXSZFkakHwu3dxtN_kmGU2v10="