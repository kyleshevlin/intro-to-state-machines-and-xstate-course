const { interpreter, Machine } = require('./index')

const initial = 'idle'
const context = {
  daysWorked: 0
}
const nodes = [
  {
    name: 'idle',
    on: {
      CHECK_FOR_WORK: 'checkForWork'
    }
  },
  {
    name: 'checkForWork',
    on: {
      '': [
        { target: 'working', cond: ctx => ctx.daysWorked <= 4 },
        { target: 'relaxing', cond: ctx => ctx.daysWorked > 4 }
      ]
    }
  },
  {
    name: 'working',
    exit: ['incrementDaysWorked'],
    on: {
      DAY_IS_DONE: 'idle'
    }
  },
  {
    name: 'relaxing'
  }
]
const actions = {
  incrementDaysWorked: ctx => (ctx.daysWorked += 1)
}

const machine = Machine(nodes, initial, actions, context)
const service = interpreter(machine)

Array(6)
  .fill()
  .forEach(() => {
    service.logCurrent()
    service.send('CHECK_FOR_WORK')
    service.logCurrent()
    service.send('DAY_IS_DONE')
    service.logContext()
    service.logCurrent()
  })
