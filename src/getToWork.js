const { interpreter, Machine } = require('./index')

const initial = 'idle'
const context = {
  attempts: 0
}
const nodes = [
  {
    name: 'idle',
    on: {
      TRY_TO_WORK: 'decide'
    }
  },
  {
    name: 'decide',
    entry: ['incrementAttempts'],
    on: {
      '': [
        { target: 'idle', cond: context => context.attempts < 3 },
        { target: 'working', cond: context => context.attempts > 2 }
      ]
    }
  },
  {
    name: 'working'
  }
]
const actions = {
  incrementAttempts: context => (context.attempts += 1)
}

const getToWorkMachine = Machine(nodes, initial, actions, context)
const service = interpreter(getToWorkMachine)

service.logCurrent()
service.send('TRY_TO_WORK')
service.logCurrent()
service.send('TRY_TO_WORK')
service.logCurrent()
service.send('TRY_TO_WORK')
service.logCurrent()
