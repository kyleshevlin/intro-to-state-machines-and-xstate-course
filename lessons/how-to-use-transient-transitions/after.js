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
        on: {
          '': [{ target: 'success', cond: 'triedEnough' }, { target: 'idle' }],
        },
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
    guards: {
      triedEnough: ctx => ctx.tries > 2,
    },
  }
)
