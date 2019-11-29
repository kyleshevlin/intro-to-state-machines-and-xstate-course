# How Action Order Affects Context Assign

## Description

While the order of actions in XState is fairly clear, how `assign`s are handled in them is non-obvious.

If you have a scenario where you try and utilize `context` in one action, then `assign` a new value to `context`, and _then_ try and utilize the new context in another action, you'll find that actually _both_ actions received the new `context` as their argument. Why does this happen?

This happens because `XState.Machine.transition` is a pure function. In order to remain pure, it does not run the actions, it accumulates them into an `actions` array that is returned in the next state object. Since `transition` does not run any side effects, it must calculate the next `context` object and return this on the state object as well. Thus, any action returned is then called in the interpreter with the next context, _not the context assumed to exist at the time and order the action was written_.

Under the hood, XState filters out `assign`s, batches them together, and returns the next `context` before any actions are run in the interpreter. It looks somewhat like this:

```javascript
let nextContext = context
const allActions = [].concat(
    stateNode.exit,
    transition.actions,
    nextStateNode.entry
  )
  .filter(Boolean) // remove any undefined actions such as `exit` and `entry`
  .map(toActionObject) // normalize the shape of all actions
  .filter(action => {
    if (!action.type === 'xstate.assign') { // special type applied to assigns internall
      return true
    }

    // result of the assign function (not real implementation)
    nextContext = action.assignment(nextContext, eventObject)
  })

return {
  actions: allActions,
  context: nextContext
}
```