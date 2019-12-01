# How to Invoke Promises

Unbeknownst to many, promises are state machines. They exist in either an `idle`, `pending`, `resolved` or `rejected` state. Because they can be modeled as state machines, we can invoke them when we enter a state in a `Machine`.

We invoke services such as a promise by using the `invoke` property on a state node. When the state is entered, the `src` of the `invoke` object is called. In the case of promises, the `Promise` is called. When the `Promise` resolves, the `onDone` transition is taken. When the `Promise` rejects, the `onError` transition is taken. In either case, the data returned from the promise, whether resolved or errored, is passed back on the event object as `event.data`.
