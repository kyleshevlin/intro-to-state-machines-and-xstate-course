const { Machine } = require('xstate')

const doorMachine = Machine({
  id: 'door',
  initial: 'locked',
  states: {
    locked: {
      id: 'locked',
      on: { UNLOCK: 'unlocked' },
    },
    unlocked: {
      initial: 'closed',
      states: {
        closed: {
          on: {
            LOCK: '#locked',
            OPEN: 'opened',
          },
        },
        opened: {
          on: { CLOSE: 'closed' },
        },
      },
    },
  },
})
