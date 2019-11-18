import { Machine } from 'xstate'

const lightBulbMachine = Machine({
  id: 'lightBulb',
  initial: 'unlit',
  states: {
    lit: {
      on: {
        BREAK: 'broken',
        TOGGLE: 'unlit'
      }
    },
    unlit: {
      on: {
        BREAK: 'broken',
        TOGGLE: 'lit'
      }
    },
    broken: {}
  }
})

console.log(lightBulbMachine.initialState)
console.log(lightBulbMachine('unlit', 'TOGGLE'))
console.log(lightBulbMachine('unlit', 'BREAK'))
console.log(lightBulbMachine('broken', 'TOGGLE'))
