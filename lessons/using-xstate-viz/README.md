# Using XState Viz

## Description

XState Viz is an online tool for visualizing our state machines. It allows you to write any state machine in the code panel on the right, and see it visualized on the left. Not only is the visualization helpful, but it is interactive. We're able to test out our machine manually by clicking the various events on the left. Anything lit blue is available for clicking. As we go further in the course, we'll discover other features of the visualization.

There are two other tabs on the right panel that are useful to us. The first is that "state" tab. This tab gives us information regarding the current state of our machine. It provides us an object with the value. If we had context, actions and more, it would show that information as well.

The second tab is the event tab. We are able to call events here as well. Anything available to the current state node is made into a button here on the bottom right. What is useful about this panel is that we can pass along extra information on our events than we can with just a string to represent our transition target. If I wanted to share the location of the lightBulb for example, that could be passed along the broken event.

We can see a history of the events sent above this part of the panel, and we can replay or edit them if we would like.

Lastly, if we are logged in, we can save our machine definition as a gist. Notice that the URL has appended a gist query param. This is the id of our gist. We can see it by going to gist.github.com/username/id
