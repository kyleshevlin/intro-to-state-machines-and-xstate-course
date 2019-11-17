const LIGHT_BULB_STATES = {
  lit: 'lit',
  unlit: 'unlit',
  broken: 'broken'
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

        case unlit:
          state = lit
      }
    },
    break() {
      state = broken
    }
  }
}
