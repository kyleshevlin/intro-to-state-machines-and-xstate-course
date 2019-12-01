# How to Use Delayed Events And Transitions

## Description

The passing of time can be represented as an event in XState. Rather than requiring the user to send an event after an amount of time has passed, XState provides the `after` property.

The value of `after` is an object whose keys are the milliseconds that should pass before a transition is taken. Consider a stop light transitioning from yellow to red after three seconds:

```javascript
//...
yellow: {
  after: { 3000: 'red' }
},
red: {
  //...
}
//...
```

We can also create dynamic delays with expressions using the `options` object as the second argument to `Machine`. This is also demonstrated in the lesson.
