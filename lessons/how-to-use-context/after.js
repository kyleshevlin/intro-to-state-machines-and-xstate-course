const { assign, interpret, Machine } = require('xstate')

const multiColoredBulbMachine = Machine(
  {
    id: 'multiColoredBulb',
    initial: 'unlit',
    context: {
      color: '#fff',
    },
    states: {
      lit: {
        on: {
          BREAK: 'broken',
          TOGGLE: 'unlit',
          CHANGE_COLOR: {
            actions: ['changeColor'],
          },
        },
      },
      unlit: {
        on: {
          BREAK: 'broken',
          TOGGLE: 'lit',
        },
      },
      broken: { type: 'final' },
    },
  },
  {
    actions: {
      changeColor: assign({
        color: (context, event) => event.color,
      }),
    },
  }
)

const service = interpret(multiColoredBulbMachine).start()

service.send({ type: 'CHANGE_COLOR', color: '#F00' }) // updates color in context to red
