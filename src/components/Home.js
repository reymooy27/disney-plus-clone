import React from 'react'
import Sliders from './Sliders'
import Tray from './Tray.js'

function Home({loading, data}) {
  return (
    <div className='home'>
      <Sliders loading={loading} data={data}/>
      <Tray loading={loading} data={data}/>
    </div>
  )
}

export default Home
