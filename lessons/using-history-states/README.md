# Using History States

## Description

Generally speaking, state machines do not and should not have a sense of _time_. They are intended to be pure functions that receive a state and event and return the next state. Pure functions by design have no sense of _history_.

Yet, it is occasionally useful to return to a previous state. How is this accomplished? With history state nodes. Each state object returned by XState contains a special property that points to the previous state. When a history state node is defined and transitioned to, the machine returns to this previously stored state.

We can create a history node by defining the `type` as `history`, and setting the `history` property to either `shallow` (the default) or `deep`.
