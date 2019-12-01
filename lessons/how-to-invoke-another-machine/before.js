const { Machine } = require('xstate')

const parentMachine = Machine({
  id: 'parent',
  initial: 'idle',
  states: {
    idle: {
      on: { ACTIVATE: 'active' },
    },
    active: {},
    done: {},
  },
})
