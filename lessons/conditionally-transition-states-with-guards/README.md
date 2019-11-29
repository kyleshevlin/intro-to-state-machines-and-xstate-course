# Conditionally Transitions States with Guards

## Description

Not all transitions should be taken immediately. Occasionally, we would like to conditionally take a transition. We do this through the use of "guards". A "guard" is a predicate function (a function that returns a boolean) that is set on a transition object's `cond` property (short for "conditional").

When an event is sent to the machine and it encounters a transition object with a `cond` property set to a guard function, it will call that function with the current `context` and `event` object. If the guard returns `true`, the transition will be taken, otherwise, it will attempt the next transition for the event, or remain in the current state.

```javascript
//...
EVENT_NAME: {
  target: 'state-name-of-transition-target',
  cond: (context, event) => predicateFunction(context, event)
}
```

## Script

In XState, we can take a transition based on a condition. This is known as a "guard". Here I have a state machine for a vending machine. On the `SELECT_ITEM` event, we only want to vend the item if the user has deposited enough coins. Otherwise, no transition should occur.

To do this, I'm going to add a guard on that event. First we'll turn the transition into an object. Next, we'll add the `cond` property. Next, we'll set the value to a string of the guard function we want to write. We'll call it `depositedEnough`.

Now, we'll add a the `options` object as the second argument to our Machine function. We'll add a `guards` property, create an object, and add a `depositedEnough` method. This method is called a predicate function. A predicate function is just a function that returns a boolean. The transition will be taken only when this function returns true. In our case, I will set this function to read from `context` whether the user has deposited a value of 100 or more.
