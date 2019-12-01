// before.js
const { Machine } = require('xstate')

const spaceHeaterMachine = Machine({
  id: 'spaceHeater',
  initial: 'poweredOff',
  states: {
    poweredOff: {
      on: { TOGGLE_POWER: 'poweredOn' },
    },
    poweredOn: {
      on: { TOGGLE_POWER: 'poweredOff' },
      initial: 'lowHeat',
      states: {
        lowHeat: {
          on: { TOGGLE_HEAT: 'lowHeat' },
        },
        highHeat: {
          on: { TOGGLE_HEAT: 'highHeat' },
        },
      },
    },
  },
})
