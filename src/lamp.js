const { interpreter, Machine } = require('./index')

const lampInitial = 'unlit'
const lampNodes = [
  {
    name: 'lit',
    on: {
      TURN_OFF: 'unlit'
    }
  },
  {
    name: 'unlit',
    on: {
      TURN_ON: 'lit'
    }
  }
]

const lampMachine = Machine(lampNodes, lampInitial)
const lampService = interpreter(lampMachine)

lampService.logCurrent()
lampService.send('TURN_ON')
lampService.logCurrent()
lampService.send('TURN_OFF')
lampService.logCurrent()
