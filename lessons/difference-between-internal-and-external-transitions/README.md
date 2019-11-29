# Difference Between Internal and External Transitions

## Description

Transitions come in two varieties: "external" and "internal". By default, a transition is considered external. This means that a transition will _exit_ the current state node, and _enter_ the next state node (even if that state node is the state the machine is currently in). This exit/enter loop will trigger any actions that are set on the `exit` and `entry` properties.

A transition can be set to internal, either through setting a `.` (dot) in front of the state node name (as we do in this lesson), or through setting the property `internal` to `true` on the transition object.

When a transition is internal, it will not exit and enter the state node, which means that the actions in the `exit/transition/entry` loop will not be called.
