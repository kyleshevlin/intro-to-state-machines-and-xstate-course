const { Machine } = require('xstate')

// static delays
const stopLightMachine = Machine({
  id: 'stopLight',
  initial: 'red',
  states: {
    red: {
      after: { 4000: 'yellow' },
    },
    yellow: {
      after: { 1000: 'green' },
    },
    green: {
      after: { 3000: 'red' },
    },
  },
})

// delays in the `options` object
const stopLightMachine = Machine(
  {
    id: 'stopLight',
    initial: 'red',
    states: {
      red: {
        after: { RED_TIMER: 'yellow' },
      },
      yellow: {
        after: { YELLOW_TIMER: 'green' },
      },
      green: {
        after: { GREEN_TIMER: 'red' },
      },
    },
  },
  {
    delays: {
      RED_TIMER: 4000,
      YELLOW_TIMER: 1000,
      GREEN_TIMER: 3000,
    },
  }
)

// dynamic delays
const stopLightMachine = Machine(
  {
    id: 'stopLight',
    initial: 'red',
    context: {},
    states: {
      red: {
        after: { RED_TIMER: 'yellow' },
      },
      yellow: {
        after: { YELLOW_TIMER: 'green' },
      },
      green: {
        after: { GREEN_TIMER: 'red' },
      },
    },
  },
  {
    delays: {
      RED_TIMER: context => context.rushHourMultiplier * 4000,
      YELLOW_TIMER: context => context.rushHourMultiplier * 1000,
      GREEN_TIMER: context => context.rushHourMultiplier * 3000,
    },
  }
)
