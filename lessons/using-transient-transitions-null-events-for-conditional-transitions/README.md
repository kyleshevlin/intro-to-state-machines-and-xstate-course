# Using Transient Transitions Null Events for Conditional Transitions

## Description

It is often useful to identify conditional branching in your machine as a state itself. A state that is designed to determine the next state does not need a specific event sent to trigger the transition. Instead, we can use the "null event" to trigger an immediate, transient transition.

The null event is identified with an event name of an empty string `''`, and is immediately sent to the state upon entry. We can setup multiple targets with conditionals, or fire off actions to set up a future state with this transient transitions.
