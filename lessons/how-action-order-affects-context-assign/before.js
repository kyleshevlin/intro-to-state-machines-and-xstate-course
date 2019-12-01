const { assign, interpret, Machine } = require('xstate')

const doubleCounterMachine = Machine(
  {
    id: 'doubleCounter',
    initial: 'idle',
    context: {
      count: 0,
    },
    states: {
      idle: {
        on: {
          INC_COUNT_TWICE: {
            actions: [
              context => {
                console.log(`Before: ${context.count}`)
              },
              'incCount',
              'incCount',
              context => {
                console.log(`After: ${context.count}`)
              },
            ],
          },
        },
      },
    },
  },
  {
    actions: {
      incCount: assign({ count: context => context.count + 1 }),
    },
  }
)

const service = interpret(doubleCounterMachine).start()

service.send('INC_COUNT_TWICE')
// Before: 2
// After: 2
