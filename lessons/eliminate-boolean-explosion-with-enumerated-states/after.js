const LIGHT_BULB_STATES = {
  lit: 'lit',
  unlit: 'unlit',
  broken: 'broken',
}

function lightBulb() {
  const { lit, unlit, broken } = LIGHT_BULB_STATES
  let state = unlit

  return {
    state() {
      return state
    },
    toggle() {
      switch (state) {
        case lit:
          state = unlit
          break

        case unlit:
          state = lit
          break
      }
    },
    break() {
      state = broken
    },
  }
}

const bulb = lightBulb()

bulb.toggle()
console.log(bulb.state())
bulb.break()
console.log(bulb.state())
