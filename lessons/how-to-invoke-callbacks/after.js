const { Machine, send } = require('xstate')

const echoCallbackHandler = (context, event) => (callback, onEvent) => {
  onEvent(e => {
    if (e.type === 'HEAR') {
      callback('ECHO')
    }
  })
}

const echoMachine = Machine({
  id: 'echo',
  initial: 'listening',
  states: {
    listening: {
      invoke: {
        id: 'echoCallback',
        src: echoCallbackHandler,
      },
      on: {
        SPEAK: {
          actions: send('HEAR', { to: 'echoCallback' }),
        },
        ECHO: {
          actions: () => {
            console.log('echo, echo')
          },
        },
      },
    },
  },
})
