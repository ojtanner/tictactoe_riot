# Tic Tac Toe

### This small website was implemented with:
* Webpack 4 for bundling and the Dev Server
* Jest for TDD
* Riot.js for modular and reusable html
* **Feedback is welcome!**
---

### What i have learned from this project:
* Webpack is hard and complicated. I probably should do the Sean Larking Webpack Academy at some point in the future.
* TDD rocks! I kinda started writing the logic first and forgetting about TDD, but once i caught up and actually started doing it, it gave me a huge confidence boost. This may be a small app, but TDD helped me actually test the behaviour of the GameLogic object and find lots and lots of errors and oversights on my part.
* Riot.js is ok for small projects, but i would like to learn a more mature technology like Vue or React.

### Things i would like to improve upon:
* I am definetly not satisfied with the current layout of the project. How do you deploy a Webpack app? Do you push the whole thing or do you just push a simple Express app with the bundled files? etc.
* I tried setting up the babel-rewire-plugin to test "private" functions. I did not get it to work, so all the methods of the GameLogic object are public and exported. That does not feel right.
* Actually start writing TDD code from the start, not just when i start hitting a snag.
* Imporove the configuration of the app. Better package.json scripts. The es-lint and prettier configs where pretty much redundant. Which is a shame.
* Make the project responsive. This was definetly not my goal, but it would be nice to make it responsive, since i will most likely show it off on the cell phone.
