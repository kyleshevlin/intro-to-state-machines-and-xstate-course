const { Machine } = require('xstate')

const doorMachine = Machine({
  id: 'door',
  initial: 'locked',
  states: {
    locked: {},
    unlocked: {},
    closed: {},
    opened: {},
  },
})
