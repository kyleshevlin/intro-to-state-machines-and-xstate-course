const { Machine } = require('xstate')

const stopLightMachine = Machine({
  id: 'stopLight',
  initial: 'red',
  states: {
    red: {
      on: { TIMER: 'yellow' },
    },
    yellow: {
      on: { TIMER: 'green' },
    },
    green: {
      on: { TIMER: 'red' },
    },
  },
})
