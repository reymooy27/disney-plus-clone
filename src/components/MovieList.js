import React from 'react'
import Slider from 'react-slick';
import './MovieList.css'

function MovieList({children, title}) {
var settings = {
    slidesToShow: 8,
    slidesToScroll: 4,
  };
  return (
    <div className='movie--list'>
      <h2>{title}</h2>
      <div className="movies">
        <Slider {...settings}>
          {children}
        </Slider>
      </div>
    </div>
  )
}

export default MovieList
