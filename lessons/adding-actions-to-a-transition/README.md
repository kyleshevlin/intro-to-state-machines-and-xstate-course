# Adding Actions to a Transition

## Description

Actions are "fire-and-forget" side effects that are triggered by transitions. We set functions on a transition object's `actions` property to have them called when a transition is taken.

```javascript
//...
EVENT_NAME: {
  target: 'name-of-state-to-transition-to',
  actions: [(context, event) => { sideEffectToFire(context, event) }]
}
//...
```

## Script

We have a light bulb machine here and I'd like to send an action when the light bulb breaks in the `lit` state.

To do this, I'm going to replace the string 'broken' with an object. The string of the next state is really a short hand for the following object, `{ target: 'broken' }`. Now that we've set the transition to an object, we can add our transition `actions` on this object. `actions` can either be a single function, or an array of functions. I personally prefer to always use the the array syntax.

An action function receives to arguments, the `context` of the state, and the `event` object that triggered the transition. We can see what type of event triggered this transition by getting the `type` property from the event. We can also see any other data that may have been passed with this event. For example, a smart light bulb might be able to tell us what room it was in when it broke. We can do that by sending an object instead of a string for our event.

Notice, in the console that when we make our transition from lit to broken that our action was called.

If we add a second action, perhaps we want to send a log to some smart home analytics system as well. Each action in the array is called.

We don't have to define these actions in place. Just like any other JavaScript, we can define our functions elsewhere and pass them in.

We can even DRY this up more by creating a special `breakEvent` object and spreading that into our `lit` and `unlit` states so that both handle `BREAK` the same way.
