const { assign, Machine } = require('xstate')

const ifAtFirstYoudontSucceed = Machine(
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
      },
      success: {},
    },
  },
  {
    actions: {
      incTries: assign({
        tries: ctx => ctx.tries + 1,
      }),
    },
  }
)
