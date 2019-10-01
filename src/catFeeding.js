const { interpreter, Machine } = require('./index')

const initial = 'sleeping'
const nodes = [
  {
    name: 'sleeping',
    on: {
      TRY_TO_WAKE_US_UP: {
        target: 'feeding',
        cond: () => {
          const today = new Date()
          const hours = today.getHours()

          return hours >= 7
        }
      }
    }
  },
  {
    name: 'feeding'
  }
]

const catFeedingMachine = Machine(nodes, initial)
const catFeedingService = interpreter(catFeedingMachine)

catFeedingService.logCurrent()
catFeedingService.send('TRY_TO_WAKE_US_UP')
catFeedingService.logCurrent()
