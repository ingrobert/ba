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

Overall, I modularized my code into a few different source files for easier future development.
If I had more time, there are definitely a lot of optimizations I could have made. First and foremost, to focus on the user's experience, I could have added
  * a loader to indicate when an ajax request is being performed
  * a prettier heading to summarize what week it was and what type of plan the user clicked on
  * proper handling of rendering symbols to the browser (example: "ProvenÃ§al Chicken & Potato Stew")

In the actual code, I could have
  * have index.html handlebar files in their own files to be more developer friendly
  * modularized it a bit more by using ES6 exports and babel to compile, rather than setting everything on the
  * separated ajax calls into helpers
  * minimized my js files
