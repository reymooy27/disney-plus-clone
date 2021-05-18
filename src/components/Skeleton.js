import React from 'react'
import './Skeleton.css'

function Skeleton({width,height,margin}) {
  return (
    <div className='skeleton' style={{width,height,margin}}></div>
  )
}

export default Skeleton
