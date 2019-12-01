const { assign, Machine } = require('xstate')

const vendingMachineMachine = Machine(
  {
    id: 'vendingMachine',
    initial: 'idle',
    context: {
      deposited: 0,
    },
    states: {
      idle: {
        on: {
          SELECT_ITEM: 'vending',
          DEPOSIT_QUARTER: {
            actions: ['addQuarter'],
          },
        },
      },
      vending: {},
    },
  },
  {
    actions: {
      addQuarter: assign({
        deposited: context => context.deposited + 25,
      }),
    },
  }
)
