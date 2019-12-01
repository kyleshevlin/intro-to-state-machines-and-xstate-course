const { Machine } = require('xstate')

const lightBulbMachine = Machine(
  {
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
      broken: {
        entry: ['logBroken', 'buyANewBulb'],
      },
    },
  },
  {
    actions: {
      logBroken: () => {
        console.log('yo i am broke')
      },
      buyANewBulb: () => {
        return fetch('madeupbulbbuyingsite.com', {
          method: 'POST',
          body: 'Get me a bulb!',
        })
      },
    },
  }
)
