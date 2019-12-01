const { Machine } = require('xstate')

const lightBulbMachine = Machine({
  id: 'lightBulb',
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

console.log(lightBulbMachine.transition('lit', 'TOGGLE').value)
