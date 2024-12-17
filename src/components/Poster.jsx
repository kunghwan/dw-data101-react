import React from 'react'
import "./Poster.css"

const Poster = () => {
  return (
    <div className='poster'>
     <h3>지금 뜨는 컨텐츠</h3>
     <ul>
      {imgs.map((img, i) =>{
          return(
            <li key={i}>
            <img src={img}
             alt="img2"/>
             <p>영화제목</p>
             </li>
          )
      })}
      
     </ul>
     
    </div>
  )
}
        

export default Poster



const img_1 = "https://picsum.photos/600/450?random=1"
const img_2 = "https://picsum.photos/600/450?random=2"
const img_3 = "https://picsum.photos/600/450?random=3"

 const imgs = [
  img_1,
  img_2,
  img_3
 ]