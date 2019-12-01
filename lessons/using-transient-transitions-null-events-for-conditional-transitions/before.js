const { assign, Machine } = require('xstate')

const tryTryAgainMachine = Machine(
  {
    id: 'tryTryAgain',
    initial: 'idle',
    context: {
      tries: 0,
    },
    states: {
      idle: {
        on: { TRY: 'trying' },
      },
      trying: {
        entry: ['incTries'],
        on: {
          '': [{ target: 'success', cond: 'enoughTries' }, { target: 'idle' }],
        },
      },
      success: {},
    },
  },
  {
    actions: {
      incTries: assign({
        tries: context => context.tries + 1,
      }),
    },
    guards: {
      enoughTries: context => context.tries >= 3,
    },
  }
)
