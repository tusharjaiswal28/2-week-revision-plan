1. What are core modules in Node.js? Name at least 10.

ANS-> Core modules are built-in modules that come with Node.js and do not require installation.

Some Common Core Modules...
a. fs
b. http
c. https
d. path
e. os
f. url
g. stream
h. events
i. util
j. crypto



2. Explain the 'fs' module. What's the difference between fs and fs/promises?

ANS-> fs module is used to interact with the files system which can read files, write files, create files and delete files.
The main difference between fs and fs/promises are fs is Callback-beased, can be synchronous while fs/promises are Promise-based and Async only.



3. What is the 'path' module used for?

ANS-> The path module helps us to create, read, and manipulate file paths reliably across all operating systems.



4. Explain the EventEmitter class. How do you use it?

ANS-> EventEmitter is a Node.js class used to handle events by allowing objects to emit events and listen for them.
We can use it in simple ways...
on(event, listener) -> listen for an event
emit(event, data) -> trigger an event


5. What is the difference between on() and once() in EventEmitter?

ANS-> The main difference between on() and once() in EventEmitter are on() is used to listens multiple times and used for recurring events while once() is used to listens only once and it get auto removed.



6. How does error handling work with EventEmitters?

ANS-> Errors are usually emitted using the event name 'error'. If no listener exists, Node.js will crash the process.



7. What is the 'cluster' module? Why would you use it?

ANS-> The cluster module allows Node.js to use multiple CPU cores by spawning worker processes. It would be used because Node.js is single-threaded, it help in improves perfromance and handles high traffic.



8. What are child processes? When would you spawn one?

ANS-> Child processes in Node.js are separate processes that your main (parent) Node process can create to run other programs or scripts. It allow Node.js to perform parallel work and execute external programs without blocking the main thread.



9. What is the difference between spawn, exec, and fork?

ANS-> The main difference between spawn, exec, and fork are-

spawn is best for long-running processes & handling output on stream-based.
exec is best for short commands with small output & handling output on buffer-based.
fork is best for running Node.js scripts it is specialized version of spawn & enabled IPC.