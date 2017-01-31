# BA Coding Challenge

## Instructions

Simply navigate to BA folder in terminal and type in `python -mSimpleHTTPServer` and navigate to `localhost:8000`

OR

```
$ npm install http-server -g
```
Determine path and type into terminal

```
$ http-server [path]
```
and navigate to `localhost:8080`

### Write a short paragraph explaining the following:

* Any technical and/or design decisions you made.
* Any interesting challenges you faced.
  * Be sure to explain how you arrived to your implemented solution and how well you think it solved the problem.
* Anything you may have left out or would have done differently if you had more time.

Overall, I modularized my code into a few different source files for easier future development. There is an overall application state, which is modified individually by clicking on either plan, or choosing a date.

I'd say that while the solution I provided does solve the problem at the spec level, there were liberties I took in order to save time. First and foremost, to focus on the user's experience, I could have added:
  * a loader to indicate when an ajax request is being performed
  * a prettier heading to summarize what week it was and what type of plan the user clicked on
  * proper handling of rendering symbols to the browser (example: "ProvenÃ§al Chicken & Potato Stew")

In the implementation, I could have:
  * have index.html handlebar files in their own files to be more developer friendly
  * separated ajax calls into helpers
  * minimized my js files
