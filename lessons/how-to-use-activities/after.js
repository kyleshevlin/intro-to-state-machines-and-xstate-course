const { Machine } = require('xstate')

const alarmClockMachine = Machine(
  {
    id: 'alarmClock',
    initial: 'idle',
    states: {
      idle: {
        on: { ALARM: 'alarming' },
      },
      alarming: {
        activities: ['beeping'],
        on: { STOP: 'idle' },
      },
    },
  },
  {
    activities: {
      beeping: () => {
        const beep = () => {
          console.log('beep!')
        }

        beep()
        const interval = setTimeout(beep, 1000)

        return () => clearInterval(interval)
      },
    },
  }
)
