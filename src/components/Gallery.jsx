import React from 'react'
import "./Gallery.css";
import {IoChevronBackOutline,IoChevronForwardOutline} from 'react-icons/io5'


const Gallery = () => {
  return (
    <div className='gal'>
      <div className="wrap">
      <img src={img} />
      <button className='l'><IoChevronBackOutline/></button>
      <button className='r'><IoChevronForwardOutline/></button>
      </div>
      </div>
  )
}
   
    


export default Gallery


const img = "https://picsum.photos/50/50?random=1"