const { Machine, send } = require('xstate')

const childMachine = Machine({
  id: 'child',
  initial: 'step1',
  states: {
    step1: {
      on: { STEP: 'step2' },
    },
    step2: {
      on: { STEP: 'step3' },
    },
    step3: {
      type: 'final',
    },
  },
})

const parentMachine = Machine({
  id: 'parent',
  initial: 'idle',
  states: {
    idle: {
      on: { ACTIVATE: 'active' },
    },
    active: {
      invoke: {
        id: 'child',
        src: childMachine,
        onDone: 'done',
      },
      on: {
        STEP: {
          actions: send('STEP', { to: 'child' }),
        },
      },
    },
    done: {},
  },
})
