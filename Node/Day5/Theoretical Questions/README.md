1. What is Node.js? How does it differ from browser JavaScript?

ANS-> Node.js is a JavaScript runtime built on Google’s V8 engine that allows JavaScript to run outside the browser, primarily on servers. The main difference is Browser JavaScript runs in the browser and controls the UI, while Node.js JavaScript runs on the server and handles backend tasks.



2. What is the event loop in Node.js? Explain how it works.

ANS-> The event loop is a mechanism that allows Node.js to handle multiple operations asynchronously using a single thread.



3. What is non-blocking I/O? How does Node.js achieve it?

ANS-> Non-blocking I/O allows the program to continue execution while waiting for I/O operations to complete.
Node.js achieve it by-:
a. Uses asynchronous APIs
b. Offloads I/O to background threads
c. Uses callbacks/promises for completion



4. Explain the difference between synchronous and asynchronous code.

ANS-> The main difference between synchronous and asynchronous code are-
    Synchronous	                    Asynchronous
a. Blocks execution	                Does not block
b. One task at a time	            Multiple tasks concurrently
c. Simple logic	                    Requires callbacks/promises



5. What are callbacks? What is callback hell?

ANS-> Callbacks are functions that passed as arguments and executed after a task completes. Callback Hell is deeply nested callbacks that are hard to read, debug and difficults to maintain.



6. What are Promises? How do they solve callback hell?

ANS-> A Promise represents the eventual completion or failure of an asynchronous operation. It have 3 states Pending, Fulfilled and Rejected. It solve callback hell by Flatten code structure, Enable chaining with .then() and Centralized error handling with .catch().



7. What is async/await? How does it work internally?

ANS-> async/await is syntactic sugar over Promises that makes asynchronous code look synchronous. It work internally like this-
a. async functions return Promises
b. await pauses execution until Promise resolves
c. Uses the event loop to resume execution



8. What is the difference between process.nextTick() and setImmediate()?

ANS-> process.nextTick() executes before event loop continues, have high priority and Can block loop if misused while setImmediate() executes in next event loop cycle have Lower priority and Safer for scheduling.



9. What are streams in Node.js? Name the types of streams.

ANS-> Streams are objects that allow reading or writing data in chunks instead of loading everything into memory. 
Types of Streams-:
a. Readable
b. Writable
c. Duplex
d. Transform



10. What is the Buffer class in Node.js?

ANS-> Buffer is a Node.js class used to handle binary data.