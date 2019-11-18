function lightBulb() {
  let isLit = false
  let isBroken = false

  return {
    state() {
      return { isLit, isBroken }
    },
    toggle() {
      isLit = !isLit
    },
    break() {
      isBroken = true
    }
  }
}

const bulb = lightBulb()

bulb.toggle()
console.log(bulb.state())
bulb.break()
console.log(bulb.state())
