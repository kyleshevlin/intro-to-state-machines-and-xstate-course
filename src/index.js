const stateGraphFactory = (
  nodes,
  initial = nodes[0].name,
  actions = {},
  context = null
) => {
  const result = {
    actions,
    initial,
    context,
    states: {}
  }

  nodes.forEach(node => {
    const { name, ...rest } = node
    result.states[name] = rest
  })

  return result
}

const interpreter = stateGraph => {
  let current = stateGraph.initial
  let context = stateGraph.context
  const obj = {}

  function checkEntry(event) {
    const { actions, states } = stateGraph

    if (states[current].entry) {
      states[current].entry.forEach(action => {
        actions[action](context, event)
      })
    }
  }

  function checkExit(event) {
    const { actions, states } = stateGraph

    if (states[current].exit) {
      states[current].exit.forEach(action => {
        actions[action](context, event)
      })
    }
  }

  function sendNullEvent() {
    obj.send('')
  }

  function updateCurrent(value) {
    current = value
  }

  function transitionLoop(event, eventValue) {
    checkExit(event)
    updateCurrent(eventValue)
    checkEntry(event)
    sendNullEvent()
  }

  obj.current = () => current
  obj.logCurrent = () => {
    console.log(current)
  }
  obj.context = () => context
  obj.logContext = () => {
    console.log(context)
  }
  obj.send = event => {
    if (!stateGraph.states[current].on) {
      return
    }

    const eventValue = stateGraph.states[current].on[event]

    if (!eventValue) {
      return
    }

    if (typeof eventValue === 'string') {
      transitionLoop(event, eventValue)
      return
    }

    if (Array.isArray(eventValue)) {
      const [next] = eventValue.filter(val => {
        if (!val.cond) {
          return false
        }

        return val.cond(context, event)
      })

      transitionLoop(event, next.target)
      return
    }

    if (eventValue.cond) {
      const result = eventValue.cond(stateGraph.context, event)

      if (!result) {
        return
      }
    }

    transitionLoop(event, eventValue.target)
  }

  return obj
}

module.exports = {
  interpreter,
  Machine: stateGraphFactory
}
