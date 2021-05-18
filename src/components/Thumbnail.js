import React from 'react'
import { Link } from 'react-router-dom'
import './Thumbnail.css'

function Thumbnail({img, horizontal, id}) {
  return (
    <Link to={`/detail/${id}`}>
      <div className="thumbnail" style={horizontal && {width: '200px', height: '115px'}}>
        <img src={img} alt="" loading='lazy' />
      </div>
    </Link>
  )
}

export default Thumbnail
