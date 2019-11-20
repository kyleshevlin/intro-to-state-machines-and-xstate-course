# Using `interpret` on a Machine

## Description

While it's powerful enough to have `Machine.transition`, it can get tedious constantly passing it a state and an event. It would be nice if we had a function that could take a machine, instantiate it, maintain the state of the machine, and give us the ability to send events to it.

This is where an interpreter comes in handy.

And interpreter takes the abstract machine and brings it to life. XState provides us a function, `interpret`, to do this. `interpret` returns to us a service and we can use that service to send events, subscribe to changes, and add callbacks to events such as `onTransition`

## Script

Using Machine.transition to change state is useful, but tedious. We need a way to instantiate a machine that maintains its state and allows us to send events and more to it. To do this, we'll use the interpreter XState provides for us, `interpret`.

I'll require that function as well. The return value from an interpretted machine is known as a service, so I'll call this service.

A service will maintain the state of our machine as it transitions from state to state, but it won't do anything until we `start()` the service. Once we've started the service, we can send events. Before we go further, it is helpful to know that we can `start` a service in a different state than the initial state by passing in the desired state to the `start` method.

Before we send events to our service, we can get the current state of the machine using the `state` getter.

The send method returns us the nextState object, we can save these off and log them out to see what's happening.

However, this is not the most useful way to use a service. Instead, there are many methods that allows to add listeners to a service to respond to changes in it. The one most useful to us is the `onTransition` method.

`onTransition` takes a listener function that receives a `state` argument. This is always the next state of the machine. We can move our logging action to there.

We can utilize some of the information from the state node itself here to limit our logging. We can check and ensure that the state has actually changed before logging. We can also see if the state matches a particular state and only log when we transition to that state.
