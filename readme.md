﻿# JavaScript30

Joined the JavaScript 30 Day Challenge at [https://JavaScript30.com](https://JavaScript30.com)

## Challenges

| Challenge                                          | Done&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Comments                    |
| -------------------------------------------------- | ------------ | --------------------------- |
| 01 - JavaScript Drum Kit                           | Aug 10, 2020 | JS: `querySelector`, event listeners<br>Cool CSS stuff: `transition`, `transform`<br>Not deviating from the video in my code |
| 02 - JS and CSS Clock                              | Aug 11, 2020 | JS: `setInterval`<br>CSS stuff: `transform-origin` to change the position of transformed elements, here to make the clockhands pivot around the right-most end and not in the middle<br>Managed to fix the bug where clockhands transition backwards to the beginning. |
| 03 - CSS Variables                                 | Aug 12, 2020 | JS: `querySelectorAll` gives you a node list which doesn't have the same methods as arrays.<br>CSS stuff: variables (--) |
| 04 - Array Cardio Day 1                            | Aug 13, 2020 | JS: `console.table` instead of `console.log` (doesn't seem to be working similarly in Edge, though), array functions: `filter`, `map`, `sort`, `reduce`, ternary operator (`? :`) |
| 05 - Flex Panel Gallery                            | Aug 14, 2020 | JS: `classList.toggle` is an easy way to remove or add a class<br>CSS: `flex`ing for the first time! |
| 06 - Type Ahead                                    | Aug 14, 2020 | JS: regular expressions, pushing data from an array into a const array with spread (`...`), `fetch` method to get data from a URL |
| 07 - Array Cardio Day 2                            | Aug 15, 2020 | JS: `some` and `every` array methods, `find` and `findIndex`. Refreshing my memory of implicit return from an arrow function (super compact), as well as the usefulness of the spread operator `...`. |
| 08 - Fun with HTML5 Canvas                         | Aug 17, 2020 | HTML: `canvas`<br>JS: You need to `getContext` from the canvas before you can do drawing. Restructuring from an array `[a, b] = [1, 2]`. Using flagging to "detect" mouse dragging. |
| 09 - Dev Tools Domination                          | Aug 18, 2020 | JS: `console.log` tricks: `%s` to insert a string (or you can use backticks \`\`), `%c` to insert CSS styles. `console.warn`, `console.error` and `console.info` for different types of messages, `console.clear`, `console.assert`, `console.dir`, and grouping (`console.group`, `console.groupCollapsed`, `console.groupEnd`). FUN! |
| 10 - Hold Shift and Check Checkboxes               | Aug 20, 2020 | JS: Challenged to try this out by myself. Got it working in a way, but was confused by when the checkboxes should be cleared -- apparently never (therefore by reloading)? Anyway, reminded about the handy `this` and how you can do stuff with this and the previous this and then assign this to that :grin: |
| 11 - Custom Video Player                           | Aug 30, 2020 | HTML: `video` tag.<br>JS: Controlling the video: methods `play`, `pause`. Video properties: `paused` (true/false), `currentTime`, `duration`. Challenged to make the video toggle fullscreen mode, which I did. Yay me! :muscle: |
| 12 - Key Sequence Detection                        | Aug 23, 2020 | JS: Collecting pressed keys in an array and checking for a secret code easily with `join('')` + `includes(secretCode)`. Using `splice` to prevent "keylogging", i.e. keeping the stored array as short as needed for the code. |
| 13 - Slide in on Scroll                            | Aug 26, 2020 | JS: `debounce`, `scroll` event plus useful window properties (`window.scrollY`, `window.innerHeight`) and `offsetTop` for elements. Nice way to make `if` statements very readable by making the conditions into variables! |
| 14 - JavaScript References VS Copying              | Aug 28, 2020 | JS: Working with copies and references. I was quite confused about the point where `Object.assign` copies only one level deep and you'll change both objects (original and copy) if you change a value too deep – until I realised that "level two" in an object is another object which is copied as a reference value. Duh. |
| 15 - LocalStorage                                  | Aug 31, 2020 | CSS: Custom checkbox.<br>JS: Local storage, event delegation ("responsible parents, negligent children" – you can add an event listener to a parent element and then find out which child triggered it). Challenge: add uncheck/check all and clear list buttons. Added! |
| 16 - Mouse Move Shadow                             | Sep 2, 2020 | JS: Adjusting text shadow based on the position of the cursor using `offsetY` and `offsetX`. Need to do some math adding `offsetTop` and `offsetLeft` when hovering over nested elements because they have their own offset coordinates. |
| 17 - Sort Without Articles                         | Sep 2, 2020 | JS: Sorting a list of band names with articles but the articles shouldn't affect the sort order. Challenged to solve it first by myself – and I did! BUT, I totally forgot about reg exp even though I love reg exp! Such an elegant solution on the video. :thumbsup: |
| 18 - Adding Up Times with Reduce                   | Sep 2, 2020 | JS: `map`-ing to turn time string format into numbers and then `reduce`-ing for calculation. You can do `.map(parseFloat)`, too. Nifty. |
| 19 - Webcam Fun                                    |  |  |
| 20 - Speech Detection                              |  |  |
| 21 - Geolocation                                   |  |  |
| 22 - Follow Along Link Highlighter                 | Sep 3, 2020 | JS: `getBoundingClientRect` to find out where in the viewport an element is and its dimensions.<br>CSS: a single span element moving around the page highlighting different links, transitioning smoothly with animation using `transform`. |
| 23 - Speech Synthesis                              |  |  |
| 24 - Sticky Nav                                    |  |  |
| 25 - Event Capture, Propagation, Bubbling and Once |  |  |
| 26 - Stripe Follow Along Nav                       |  |  |
| 27 - Click and Drag                                |  |  |
| 28 - Video Speed Controller                        |  |  |
| 29 - Countdown Timer                               |  |  |
| 30 - Whack A Mole                                  |  |  |