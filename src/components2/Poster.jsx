import React from 'react'
import './Poster.css'

const Poster = () => {
  return (
    <div className='Pos'>
      <h3>지금 뜨는 콘텐츠</h3>
      <ul>
        <li><img src={img_1}/><p>영화제목</p></li>
        <li><img src={img_2}/><p className='ti'>영화제목</p></li>
        <li><img src={img_3}/><p>영화제목</p></li>
      </ul>
    </div>
  )
}

export default Poster

const img_1='https://picsum.photos/600/450?random=1'
const img_2='https://picsum.photos/600/450?random=2'
const img_3='https://picsum.photos/600/450?random=3'