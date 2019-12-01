const { Machine, interpret } = require('xstate')

const lightBulbMachine = Machine({
  id: 'lightBulb',
  initial: 'unlit',
  states: {
    lit: {
      on: {
        BREAK: 'broken',
        TOGGLE: 'unlit',
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
})

const service = interpret(lightBulbMachine).start()

service.onTransition(state => {
  console.log(state.value)
})

service.send('TOGGLE')
service.send('BREAK')
