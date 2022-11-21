import { entity } from 'simpler-state'

// game status enum 'intitial', 'started', 'ended'
export const gameObj = entity({
  user: null,
  startedGame: false,
  thinking: false,
  takeOff: false,
  jumping: false
})

export const updateUser = (user) => {
  gameObj.set((values) => ({
    ...values,
    user
  }))
}

export const updateGameStart = (startedGame) => {
  gameObj.set((values) => ({
    ...values,
    startedGame
  }))
}

export const updateGameThinking = (thinking) => {
  gameObj.set((values) => ({
    ...values,
    thinking
  }))
}


export const updateGameTakeOff = (takeOff) => {
  gameObj.set((values) => ({
    ...values,
    takeOff
  }))
}

export const updateGameJumping = (jumping) => {
  gameObj.set((values) => ({
    ...values,
    jumping
  }))
}