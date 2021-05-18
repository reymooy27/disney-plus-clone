import React, { useEffect, useState } from 'react'
import Caraousel from './Caraousel'
import MovieList from './MovieList'
import Thumbnail from './Thumbnail'
import img from '../image/846059-h.png'
import img2 from '../image/952828-v.jfif'
import { useParams } from 'react-router'
import axios from 'axios'

function Detail() {

  const {id} = useParams()
  console.log(id)
  
  const [data, setData] = useState([]);

  useEffect(() => {
    const fecthMovie = async ()=>{
      await axios.get('https://yts.mx/api/v2/movie_details.json?movie_id='+id)
      .then(res=> {
        setData(res.data.data.movie)
      })
      .catch(err=>{
        console.log(err)
      })
    }

    fecthMovie()
  }, []);

  console.log(data)

  return (
    <div className='detail'>
      <Caraousel title={data.title} year={data.year} description={'desc'} img={data.background_image}/>
      <MovieList title='Episode'>
        {Array(16).fill('').map((t,i)=> <Thumbnail key={i} img={img2}/>)}
      </MovieList>
    </div>
  )
}

export default Detail
