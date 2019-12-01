# How to Invoke Callbacks

## Description

We can invoke a callback as a service when we enter a state in XState. This gives us the ability to trigger various functionality by responding to events sent to the service, and allows us to send events _back_ to the parent machine.

We do this by writing a "callback handler" and setting it as the `src` of our invoked service. A callback handler is a function that receives the current `context` and the `event` object that triggered the invocation. This function returns another function that receives two functions as arguments. A `callback` function to send events to the parent machine, and an `onEvent` function for the handler to respond to events sent to the handler.

The way events are sent to the callback handler is by utilizing the `options` argument of the `send` action creator. We identify where we send events to using the `to` property, and setting the value to the `id` of our service.