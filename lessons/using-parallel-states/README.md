# Using Parallel States

## Description

Can you walk and talk at the same time? If so, you've experienced what it's like to be in two states at the same time. Hopefully, those two states have no influence on the other. Whether or not you talk, you can walk, and vice versa. States that occur concurrently and have no affect on the other are known as "parallel states".

Parallel states happen simultaneously. The machine is in _all_ of the parallel states at the same time. To create a parallel state node, we set the `type` to `'parallel'` and then remove the `initial` state. There's no need for an `initial` property when you're in all the child states at the same time.
