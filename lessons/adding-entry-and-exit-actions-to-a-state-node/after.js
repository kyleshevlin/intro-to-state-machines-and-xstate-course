const { Machine } = require('xstate')

const lightBulbMachine = Machine(
  {
    id: 'lightBulb',
    initial: 'unlit',
    states: {
      lit: {
        // fire darkAndCold when we exit lit state
        exit: ['darkAndCold'],
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
      // fire logBroken when we enter the broken state
      broken: {
        entry: ['logBroken'],
      },
    },
  },
  {
    actions: {
      logBroken: () => {
        console.log('yo i am broke')
      },
      darkAndCold: () => {
        console.log('it is getting dark and cold')
      },
    },
  }
)
