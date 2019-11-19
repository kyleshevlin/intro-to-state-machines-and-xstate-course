# Enumerating Only Possible States

Here I have a function, `lightBulb`, that simulates the functionality of a light bulb and tracks the state it can be in with a combination of two booleans: `isLit` and `isBroken`.

If we aren't careful, it is easy to get into an impossible state. We toggle the light bulb to lit, we break the bulb, and suddenly we have a light bulb that is both lit and broken.

We can attempt to solve this problem imperatively by guarding against certain boolean states. We can add a guard in `toggle` that checks the isBroken state, guarantees `isLit` is false and returns early. We can also ensure that when the bulb is broken, we also update `isLit` to false. Now, we've guarded so well that we don't _need_ to set `isLit` to false in `toggle`, but how often do we feel confident enough to do this in our programs?

The fundamental problem is boolean explosion. As we add booleans, our number of states increases by 2^n where `n` is the number of booleans. This means boolean complexity grows quickly. It also means that many of these states are actually impossible states, which can only lead to bugs. How do we eliminate this problem?

We start by enumerating only the possible states. I'm going to create an enum using an object, you could also use a Map if you like, of only the possible states of the bulb: `lit`, `unlit`, and `broken`.

Next, we will refactor our function by removing the booleans `isLit` and `isBroken` to only have a value of `state`. We will set the default state to `unlit` and update the `state()` method to return this value instead.

Next, we will refactor our `toggle` method. Instead of toggling a boolean, we will instead attempt to toggle between `lit` and `unlit` states. We can do this with a switch statement. If we are in the `lit` state, we will set `state` to `unlit` and vice versa. If we are in neither of those states, we are `broken`, and we can simply return the current state by default.

Lastly, we can update our `break` method to set the state to `broken`.

We now have a light bulb function that has enumerated only the possible states, defined only possible transitions between those states, and returns a single possible state with each event performed on the light bulb.

In summary, controlling our functions with booleans quickly increases complexity and leads to impossible states. We eliminate the opportunity for impossible states to create bugs by enumerating only the possible states. We then define transitions between those possible states, leaving us with a robust function.
