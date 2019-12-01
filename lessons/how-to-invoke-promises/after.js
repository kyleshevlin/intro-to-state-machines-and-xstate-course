const { assign, Machine } = require('xstate')

const fetchCuteAnimals = () => {
  return fetch('https://www.reddit.com/r/aww.json')
    .then(res => res.json())
    .then(data => data.data.children.map(child => child.data))
}

const cuteAnimalMachine = Machine({
  id: 'cuteAnimals',
  initial: 'idle',
  context: {
    cuteAnimals: null,
    error: null,
  },
  states: {
    idle: {
      on: { FETCH: 'loading' },
    },
    loading: {
      invoke: {
        id: 'fetchCuteAnimals',
        src: fetchCuteAnimals,
        onDone: {
          target: 'success',
          actions: [
            assign({
              cuteAnimals: (context, event) => event.data,
            }),
          ],
        },
        onError: {
          target: 'failure',
          actions: [
            assign({
              error: (context, event) => event.data,
            }),
          ],
        },
      },
    },
    success: {
      type: 'final',
    },
    failure: {
      on: {
        RETRY: 'loading',
      },
    },
  },
})
