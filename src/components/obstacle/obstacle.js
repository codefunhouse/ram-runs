import React from 'react'

const Obstacle = (props) => {
  return (
    <div className='obstacle'
      {...props}
    >
      <img
        src={'/assets/obstacles/Obstacle-1.png'}
        alt="obstacle" />
    </div>
  )
}

export default Obstacle