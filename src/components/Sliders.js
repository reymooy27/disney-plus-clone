import React from 'react'
import './Sliders.css'
import Slider from 'react-slick'
import Caraousel from './Caraousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from '../image/846059-h.png'
import img2 from '../image/830030-h.jfif'
import Skeleton from './Skeleton';

 var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

function Sliders({loading, data}) {

  return (
    <div className='slider'>
      {loading ? <Skeleton width='100%' height='400px'/> : 
      <Slider {...settings}>
        {data.map((t,i)=>(
          <div key={i}>
            <Caraousel title={t.title} year={t.year} description={t.summary} img={t.background_image}/>
          </div>
        ))}
      </Slider>}
    </div>
  )
}

export default Sliders
