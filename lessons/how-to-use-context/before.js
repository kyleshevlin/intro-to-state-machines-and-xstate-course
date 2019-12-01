const { Machine } = require('xstate')

const multiColoredBulbMachine = Machine({
  id: 'multiColoredBulb',
  initial: 'unlit',
  states: {
    lit: {
      on: {
        BREAK: 'broken',
        TOGGLE: 'unlit',
      },
    },
    unlit: {
      on: {
        BREAK: 'broken',
        TOGGLE: 'lit',
      },
    },
    broken: { type: 'final' },
  },
})
