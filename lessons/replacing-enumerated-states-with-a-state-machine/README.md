# Replacing Enumerated States with a State Machine

## Description

Enumerating the possible states of a function is a sound way to write a function, but it is imperative and could benefit from abstraction. We can do this with a state machine.

A state machine formalizes how we enumerate states and transitions. For the sake of clarity and to emphasize the core concepts, I will be overly verbose with my code in this lesson.

In this lesson, we'll replace the state enum with individual state objects. We'll also replace our events `toggle()` and `break()` with events `TOGGLE` and `BREAK`. I'll also demonstrate the usefulness of the Machine's `initialState` getter and the `transition` method. Lastly, I'll show what happens when we pass erroneous states or events into our machine.

## Script

We will replace the enumerated states with individual objects for the three possible states of our light bulb: `lit`, `unlit` and `broken`.

We can combine these three states into a state object we'll name `states`.

Next, we will need to define an `initial` state, so I will define a `const` of the name `initial` and set it to the string `unlit`.

Next, I will combine `initial` and `states` into an object we will call `config`. This will be the configuration object we will pass to our XState machine momentarily. Our config should also have an `id`, and since this is the configuration for a light bulb, we'll give it the string of `lightBulb`.

We have enumerated our states, but we have yet to enumerate the events and transitions between states in our machine.

Before, our function had a `break()` method that would put the light bulb into a `broken` state. With state machines, we trigger transitions through events. We define which state nodes respond to which events. So rather than having a `break()` method. We'll have a `BREAK` event. We define this event by using it as a key in the object we set to the states `on` property. Since we want to be able to transition to `broken` from either the `lit` or `unlit` states, I'll add the event to both simultaneously. We know that the event is our key, and by convention, it is typically capitalized while using XState, but what is the value? The value is the target state of the transition we would like to take. In this case, it is the `broken` state, so we set the value to a string of `'broken'`.

Next, we want both `lit` and `unlit` states to respond to a `TOGGLE` event, but each one will have a different target. From the `lit` state, we'll target the `unlit` state, and from the `unlit` state, we'll target the `lit` state.

Notice that the `broken` state responds to no events. That is because it is a final state of our machine. The `broken` state node has no transitions to other states. We can put the final touch on our config by setting a `type` of `final` to our `broken` state. Yes, the pun was intended.

We can now import the `Machine` factory from the `xstate` library. Since I am merely using Node for my example, I will require it with CommonJS instead of importing it as an ES6 module.

We now create a `lightBulbMachine` by passing our config to `Machine`.

XState `Machine`s come with a few useful getters and methods. We can get the initial state node by using the `initialState` getter. Logging this out we see the entirety of the `unlit` state returned by the machine.

Next, the most useful method on a machine is the `transition` method. `transition` is a pure function. It receives a `state` and an `event` argument and returns the next state object.

Let's put this into action. Let's use the machine's `initialState` and send the `TOGGLE` action. The state object we receive is for the `lit` state.

Let's replace `initialState` with the `lit` state. The same event leads to `unlit`. If we replace the state again with `broken`, we'll see that we get the `broken` state back.

What happens if we pass it a state that the machine can't handle? An error occurs.

What happens if we pass it an event that it doesn't know how to handle. By default it does nothing, returning the state node of the state we are currently in. However, we can set our machine's config to `strict: true`, and then calling an event our machine can't handle throws an error.
