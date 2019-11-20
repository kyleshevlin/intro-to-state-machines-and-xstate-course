# Enumerating Only Possible States

## Description

There are several fundamental problems with trying to manage the state of a function through the use of booleans. The first is often referred to as "boolean explosion". For every boolean we add to a function, we increase the number of possible states at a rate of `2^n` where `n` is the number of booleans. Running the math just a few times quickly reveals an absurd amount of states.

- 1 booleans = 2 states
- 2 booleans = 4 states
- 3 booleans = 8 states
- 4 booleans = 16 states
- 5 booleans = 32 states!

The second problem with managing state with booleans is that many of these states are "impossible states", states our application should never be in. The example in the lesson is that the light bulb should not be `isLit` and `isBroken`. It's simply not possible, and is an inaccurate modeling of an actual light bulb.

The way we solve for this problem is by enumerating the possible states. In other lessons in this course, we'll do that with state machines, but for now, we'll do that by enumerating the possible states and updating our function to only utilize these possible states. By doing this, we make a more robust function that's bug free.

## Script

Here I have a function that simulates the functionality of a light bulb. It tracks the state of the bulb through the combination of two booleans: `isLit` and `isBroken`.

As this function is currently written, it is trivial to get into an impossible state. I will toggle the bulb from unlit to lit, and we have a bulb that is both lit and broken.

We can solve this problem imperatively by guarding against certain outcomes. We can add a guard in `toggle` that checks the `isBroken` state, guarantees `isLit` is `false` and returns early. We can also ensure that when the bulb is broken, we also update `isLit` to false.

To solve this, we enumerate only the possible states. I'm going to create an enum using an object (you could also use a Map if you prefer) of only the possible states of the bulb: `lit`, `unlit`, and `broken`. We'll set the values as strings.

Next, we will refactor our function by removing the booleans `isLit` and `isBroken` to only have a value of `state`. We will set the default state to `unlit` and update the `state()` method to return this value instead.

Next, we will refactor our `toggle` method. Instead of toggling a boolean, we will instead attempt to toggle between `lit` and `unlit` states. We can do this with a switch statement. If we are in the `lit` state, we will set `state` to `unlit` and vice versa. If we are in neither of those states, we are `broken`, and we can simply return the current state by default.

Lastly, we can update our `break` method to set the state to `broken`.

We now have a light bulb function that has enumerated only the possible states, methods that can only set the state to one of these possible ones, and returns a single possible state with each event performed on the light bulb.
