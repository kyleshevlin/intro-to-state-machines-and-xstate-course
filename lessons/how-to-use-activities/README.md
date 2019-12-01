# How to Use Activities

## Description

Activities are continuous, ongoing side effects that are triggered by entering a particular state, and only stop when that state is exited. In the example in this lesson, we have an alarm clock machine that does the activity of beeping for the duration of the `alarming` state.

Activities are a function that receives `context` and the `event` object (just like actions). They fire off the ongoing side effect in the body of the function, and optionally return a function that performs any cleanup necessary for the activity.

```javascript
{
  activities: {
    beeping: (context, event) => {
      const beep = () => {
        console.log('beep!')
      }

      beep()
      const interval = setInterval(beep, 1000)

      return () => { clearInterval(interval) }
    }
  }
}
```
