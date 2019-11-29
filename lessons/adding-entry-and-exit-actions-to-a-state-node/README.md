# Triggering Actions When Entering or Exiting a State Node

## Description

Actions aren't limited to being called on transitions. They can also be called when we enter or exit a state node. This is done through the `entry` and `exit` properties.

The API for `entry` and `exit` actions is the same as that for `actions` on transitions. It can recieve a single function or an array of functions, each which will be called with the next `context` and the `event` object that caused the transition.

This is a powerful way to fire side effects based on states rather than transitions.

```javascript
//...
states: {
  broken: {
    entry: [
      (context, event) => {
        sideEffectToFireWhenWeEnterTheBrokenState(context, event)
      }
    ],
    exit: [
      (context, event) => {
        sideEffectToFireWhenWeExitTheBrokenState(context, event)
      }
    ]
  }
}
```

## Script
