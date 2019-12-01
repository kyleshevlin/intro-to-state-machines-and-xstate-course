const { Machine } = require('xstate')

// inline as a single function
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
        BREAK: {
          target: 'broken',
          // inline function
          actions: (context, event) => {
            console.log('I broke!', context, event)
          },
        },
        TOGGLE: 'lit',
      },
    },
    broken: {},
  },
})

// or an array of inline functions
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
        BREAK: {
          target: 'broken',
          // array of inline functions
          actions: [
            (context, event) => {
              console.log('I broke!', context, event)
            },
            () => {
              console.log('Ouch!')
            },
          ],
        },
        TOGGLE: 'lit',
      },
    },
    broken: {},
  },
})

// Or with the string shorthand and the `options` object of Machine
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
          BREAK: {
            target: 'broken',
            // string shorthand
            actions: ['logBroken'],
          },
          TOGGLE: 'lit',
        },
      },
      broken: {},
    },
  },
  {
    actions: {
      logBroken: (context, event) => {
        console.log('I broke!', context, event)
      },
    },
  }
)
