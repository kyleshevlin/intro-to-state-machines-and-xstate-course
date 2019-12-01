# How to Invoke Another Machine

## Description

Trying to structure the state logic of an application as a single machine can begin to become unwieldy when we have too many states. It is often better to divide our app into smaller machines and invoke those machines as necessary.

When we enter a state in a machine, we can invoke a child machine. This machine can send and receive events from the parent. When the child machine reaches a final state, the `onDone` transition is taken by the parent's current state node.

To invoke a child machine, we use the `invoke` property and set the `src` property to a machine. We can forward events in the parent machine to the child machine by setting the property `autoForwards` to `true`. We can also send events to the child machine through setting the second argument of the `send()` function to `{ to: 'child-machine-id' }`.

The child machine can send events to the parent machine by using the `sendParent` function. In this way, parent and child machines can communicate.
