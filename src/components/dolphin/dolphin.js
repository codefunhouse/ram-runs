import React from 'react'
import { gameObj } from '../../core/game'

const Dolphin = (props) => {
  const { startedGame, thinking } = gameObj.use()

  console.log(thinking)

  return (
    <div className='dolphin'
      {...props}
    >
      <img
        src={
          !startedGame ?
            '/assets/flipping/Flippy Dolphin 10.png'
            :
            thinking ?
              '/assets/flipping/Flippy_Dolphin.gif'
              :
              '/assets/flipping/Flippy Dolphin 1.png'
        }
        alt="dolpin"
        className={`${startedGame ? 'flip' : ''}`}
      />
    </div>
  )
}

export default Dolphin