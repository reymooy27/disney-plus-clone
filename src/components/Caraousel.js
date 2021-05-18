import React from 'react'
import './Caraousel.css'

function Caraousel({img, title, description,year}) {
  return (
    <div className='caraousel'>
      <div className="description">
        <div className="title">{title}</div>
        <div className="top--title">{year}</div>
        <div className="desc">{description.length > 300 ? description.substring(0,290) + '...' : description }
        </div>
      </div>
      <div className="caraousel--image">
        <div className="gradient"></div>
        <img src={img} alt="" loading='lazy'/>
      </div>
    </div>
  )
}

export default Caraousel
