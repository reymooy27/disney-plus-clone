import React from 'react'
import './Tray.css'
import Thumbnail from './Thumbnail'
import MovieList from './MovieList'
import Skeleton from './Skeleton'

function Tray({loading, data}) {
  return (
    <div className='tray'>
      {loading ? 
        <MovieList>
          {Array(32).fill('').map((t,i)=> <Skeleton key={i} width='150px' height='200px' margin='0 10px 0 0' />)}
        </MovieList> :
      <div>
        <MovieList title='Film untuk anda'>
          {data.map((t,i)=> <Thumbnail id={t.id} key={i} img={t.medium_cover_image}/>)}
        </MovieList>
        <MovieList title='Film untuk anda'>
          {data.map((t,i)=> <Thumbnail id={t.id} key={i} img={t.medium_cover_image}/>)}
        </MovieList>
        <MovieList title='Film untuk anda'>
          {data.map((t,i)=> <Thumbnail id={t.id} key={i} img={t.medium_cover_image}/>)}
        </MovieList>
        <MovieList title='Film untuk anda'>
          {data.map((t,i)=> <Thumbnail id={t.id} key={i} img={t.medium_cover_image}/>)}
        </MovieList>
      </div>
      }
    </div>
  )
}

export default Tray
