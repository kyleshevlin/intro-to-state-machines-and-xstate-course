# How to Use Context

Consider a text input. It would be impossible for anyone to model every value you could possibly put into it, because the number of possible values is infinite. This is an infinite state.

Infinite state can be tracked and utilized by XState machines as "extended state". This extended state is called `context`. Context is passed to every function that is triggered by the machine: actions, activities, guards, and more.

In this lesson we learn how to set `context` and update it through `assign` actions.