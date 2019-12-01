# Sending Events As Actions

## Description

XState provides the `send` function to create an action that will send the event passed in to the machine. If we provide the second argument to the `send` function, the `options` object, we can send the event `to` a particular machine. This is useful when you have invoked a machine as a service on a state node, a concept that will be explored in a later lesson.
