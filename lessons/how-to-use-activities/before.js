const { Machine } = require('xstate')

const alarmClockMachine = Machine({
  id: 'alarmClock',
  initial: 'idle',
  states: {
    idle: {
      on: { ALARM: 'alarming' },
    },
    alarming: {
      on: { STOP: 'idle' },
    },
  },
})
