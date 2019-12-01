# Using Hiearchical States

## Description

As our state machines grow more complex, we might find ourselves in a situation where a state should only exist if the machine is already in another state. To do this, we can use hierarchical states.

Instead of attempting to define all the states of a machine at a top level, we can nest states that should only be available as children of a parent state. These substates are written _exactly_ like the states of the top level of a machine: with an `initial` property, and the `states` of the nested state graph.

Using hierarchical states is a great way to avoid needing to check for booleans in an application. If a state can only exist when another state exists, consider if the one isn't in fact a child of the other.
