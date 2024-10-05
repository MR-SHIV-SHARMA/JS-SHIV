// 1. What is JavaScript and who created it?
console.log("JavaScript is a high-level scripting language developed by Brendan Eich in 1995 while at Netscape. Initially named 'Mocha,' it was later renamed to 'JavaScript' and is used to make web pages interactive and dynamic.");

// 2. What was the original purpose of JavaScript when it was created?
// console.log("JavaScript was designed to add interactivity and dynamic features to web pages, allowing for client-side scripting like form validation and dynamic content updates without needing server-side processing.");

// 3. Can you explain the evolution of JavaScript from its inception to the present?
// console.log("JavaScript began in 1995 and has evolved through several ECMAScript versions: ECMAScript 1.0 in 1996, 3.0 in 1999, 5.0 in 2009, and ES6 in 2015 with major updates. Recent versions continue to introduce new features, making JavaScript more powerful and versatile.");

// 4. What are some key features introduced in ECMAScript 6 (ES6)?
// console.log("ES6 introduced features like classes, modules, arrow functions, promises, and block-scoped variables (let and const), enhancing JavaScript’s syntax and capabilities.");

// 5. What is the significance of ECMAScript and how does it relate to JavaScript?
// console.log("ECMAScript is the standard for scripting languages, and JavaScript is an implementation of this standard. ECMAScript defines core features and syntax, ensuring consistency and compatibility across JavaScript engines.");

// 6. How did Brendan Eich's work on JavaScript influence web development?
// console.log("Brendan Eich’s JavaScript transformed web development by enabling dynamic, client-side interactions on web pages, leading to the development of rich, interactive web applications.");

// 7. Can you discuss any controversies or significant events related to Brendan Eich and JavaScript?
// console.log("Brendan Eich faced controversy due to his support for Proposition 8, which led to his resignation as CEO of Mozilla. Despite this, his creation of JavaScript remains a pivotal contribution to web development.");

// 8. What are the key differences between var, let, and const in JavaScript?
// console.log("var: Function-scoped or globally scoped, allows re-declaration and updating. let: Block-scoped, allows updating but not re-declaration within the same block. const: Block-scoped, cannot be re-assigned or re-declared, but the object it holds can still be mutated.");

// 9. What are JavaScript's data types?
// console.log("JavaScript has two categories of data types: Primitive Types: undefined, null, boolean, number, string, symbol, and bigint. Reference Types: object, array, function, etc.");

// 10. Explain the concept of hoisting in JavaScript.
// console.log("Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their containing scope during the compilation phase. This means variables and functions can be used before they are declared.");

// 11. What is a closure in JavaScript?
// console.log("A closure is a function that retains access to its lexical scope even after the function has finished executing. This allows the function to remember and access variables from its outer scope.");

// 12. How does the this keyword work in JavaScript?
// console.log("The this keyword refers to the object that is currently executing the code. Its value is determined by the context in which a function is called: Global Context: Refers to the global object (e.g., window in browsers). Object Method: Refers to the object from which the method was called. Constructor Function: Refers to the new instance created. Arrow Functions: Lexically bind this from the surrounding context.");

// 13. What are JavaScript Promises and how do they work?
// console.log("Promises are objects representing the eventual completion or failure of an asynchronous operation. They allow chaining of .then() and .catch() methods to handle asynchronous results or errors.");

// 14. What is the event loop in JavaScript?
// console.log("The event loop is a mechanism that handles asynchronous operations in JavaScript. It continuously checks the call stack and the message queue, executing tasks from the queue when the stack is empty.");

// 15. Can you explain the difference between synchronous and asynchronous JavaScript?
// console.log("Synchronous JavaScript: Executes code line by line, blocking execution until the current operation completes. Asynchronous JavaScript: Allows code execution to continue while waiting for operations like network requests or timers to complete, often using callbacks, promises, or async/await.");

// 16. What are JavaScript’s key features that were introduced in ECMAScript 2019 (ES10)?
// console.log("ES10 introduced features such as: Array.prototype.flat() and Array.prototype.flatMap(): Flatten nested arrays. Object.fromEntries(): Converts a list of key-value pairs into an object. String.prototype.trimStart() and String.prototype.trimEnd(): Trim whitespace from the beginning and end of a string, respectively.");

// 17. What is the purpose of async and await in JavaScript?
// console.log("async and await simplify asynchronous code by allowing you to write asynchronous operations in a synchronous style. async marks a function as asynchronous, and await pauses the function execution until a promise is resolved.");

// 18. What is the prototype in JavaScript?
// console.log("In JavaScript, every object has a prototype, which is another object that serves as a template from which the object inherits properties and methods. The prototype chain allows objects to share properties and methods.");

// 19. How does JavaScript handle errors and exceptions?
// console.log("JavaScript handles errors using try...catch blocks. Code that might throw an error is placed inside the try block, and error handling code is placed in the catch block. You can also use finally to execute code regardless of whether an error occurred.");

// 20. Can you explain what this refers to in an arrow function?
// console.log("In arrow functions, this is lexically bound to the surrounding context where the arrow function is defined, rather than being dynamically determined by how the function is called.");

// 21. What are template literals in JavaScript?
// console.log("Template literals are a way to create strings in JavaScript using backticks (`). They allow for multi-line strings and embedded expressions using ${expression}. Example: const name = 'Alice'; const greeting = `Hello, ${name}!`;");

// 22. What is the difference between == and === in JavaScript?
// console.log("== (Equality Operator): Compares two values for equality after type conversion (type coercion). === (Strict Equality Operator): Compares two values for equality without type conversion. Both value and type must be the same.");

// 23. What is an IIFE (Immediately Invoked Function Expression)?
// console.log("An IIFE is a function that is defined and executed immediately after its creation. It is used to create a new scope and prevent variable leakage. Example: (function() { var privateVar = 'This is private'; console.log(privateVar); })();");

// 24. What are JavaScript modules and how do they work?
// console.log("JavaScript modules allow you to divide code into separate files and import/export functions, objects, or variables between them. Modules help in organizing and managing code. Example: // module.js export const greet = () => 'Hello'; // main.js import { greet } from './module.js'; console.log(greet());");

// 25. What is the difference between null and undefined?
// console.log("null: A deliberate assignment value indicating no value or object. undefined: A variable that has been declared but not yet assigned a value, or a function that does not explicitly return a value.");

// 26. Explain the map and filter methods in JavaScript.
// console.log("map: Creates a new array by applying a function to each element of an existing array. Example: const numbers = [1, 2, 3]; const squared = numbers.map(x => x * x); // [1, 4, 9]. filter: Creates a new array containing elements that pass a test implemented by a function. Example: const numbers = [1, 2, 3, 4]; const evens = numbers.filter(x => x % 2 === 0); // [2, 4]");

// 27. What is the reduce method in JavaScript?
// console.log("The reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value. It is often used for summing values or combining elements. Example: const numbers = [1, 2, 3]; const sum = numbers.reduce((accumulator, current) => accumulator + current, 0); // 6");

// 28. What is the purpose of the bind method in JavaScript?
// console.log("The bind method creates a new function that, when called, has its this keyword set to a specific value, with a given sequence of arguments preceding any provided when the function is invoked.");

// 29. How do you handle asynchronous operations in JavaScript?
// console.log("Asynchronous operations in JavaScript can be handled using callbacks, promises, or async/await. Callbacks: Functions passed as arguments to be executed later. Promises: Objects representing the eventual completion or failure of an async operation. async/await: Provides a more readable way to handle asynchronous operations by writing async code that looks synchronous.");

// 30. What are Symbol data types in JavaScript?
// console.log("Symbols are a unique and immutable primitive data type introduced in ES6. They are used to create unique identifiers for object properties. Example: const sym = Symbol('description'); const obj = { [sym]: 'value' }; console.log(obj[sym]); // 'value'");

// 31. Explain the concept of event delegation.
// console.log("Event delegation is a technique in which a single event listener is added to a parent element instead of adding individual listeners to multiple child elements. The event is propagated from the child elements to the parent, allowing you to handle events more efficiently.");

// 32. What is a Promise.all() method?
// console.log("Promise.all() takes an iterable of promises and, when all the promises in the iterable have resolved, returns a single promise that resolves with an array of the results. If any promise in the iterable rejects, Promise.all() rejects with the reason of the first promise that was rejected.");

// 33. What is the difference between call, apply, and bind methods in JavaScript?
// console.log("call: Calls a function with a specified this value and arguments provided individually. apply: Calls a function with a specified this value and arguments provided as an array. bind: Creates a new function that, when called, has its this keyword set to a specific value, and can also set initial arguments.");

// 34. What are JavaScript decorators and how are they used?
// console.log("Decorators are a special kind of declaration that can be attached to a class or class method to modify its behavior. They are a stage 2 proposal in ECMAScript and are used in some frameworks for tasks like logging, validation, or adding metadata.");

// 35. What is the setTimeout and setInterval methods?
// console.log("setTimeout: Executes a function after a specified delay. Example: setTimeout(() => console.log('Hello after 1 second'), 1000); setInterval: Repeatedly executes a function at specified intervals. Example: setInterval(() => console.log('Hello every 2 seconds'), 2000);");

// 36. What is a WeakMap in JavaScript and how does it differ from a Map?
// console.log("A WeakMap is a collection of key-value pairs where keys must be objects and values can be any type. Unlike Map, keys in WeakMap are weakly referenced, meaning that if there are no other references to the key object, it can be garbage collected. This helps prevent memory leaks.");

// 37. What is the EventTarget interface in JavaScript?
// console.log("The EventTarget interface is implemented by objects that can receive and handle events. It provides methods such as addEventListener(), removeEventListener(), and dispatchEvent() to manage event handling.");

// 38. Explain the concept of prototype chaining in JavaScript.
// console.log("Prototype chaining is a mechanism in JavaScript where objects inherit properties and methods from other objects through their prototypes. When a property or method is accessed on an object, JavaScript looks up the prototype chain to find it if it’s not directly on the object.");

// 39. What are async functions and how do they work with promises?
// console.log("async functions are functions that return a promise. Inside an async function, await can be used to pause execution until a promise is resolved, making asynchronous code easier to write and read.");

// 40. What are Generators in JavaScript and how do they differ from regular functions?
// console.log("Generators are functions that can be paused and resumed using the yield keyword. They return an iterator object that can be used to control the execution of the function. Unlike regular functions, generators allow you to produce multiple values over time.");

// 41. What is the Object.defineProperty() method used for in JavaScript?
// console.log("Object.defineProperty() is used to define or modify a property on an object. It allows you to specify property attributes such as value, writable, enumerable, and configurable.");

// 42. How does JavaScript handle type coercion?
// console.log("JavaScript handles type coercion by automatically converting values from one type to another when performing operations between different types. This can lead to unexpected results, so it’s important to be aware of how coercion works, especially with == comparisons.");

// 43. What is a Service Worker and what is it used for in JavaScript?
// console.log("A Service Worker is a script that runs in the background of a web application, separate from the web page, and can intercept network requests, cache resources, and handle background tasks such as push notifications. It is used to enhance performance and enable offline capabilities.");

// 44. What is a Map object in JavaScript and how is it different from an object?
// console.log("A Map object holds key-value pairs and maintains the insertion order of keys. Keys can be of any type, and Map provides methods like set(), get(), and has(). Unlike objects, Map has predictable iteration order and is not limited to strings and symbols as keys.");

// 45. Explain the concept of “event bubbling” and “event capturing” in JavaScript.
// console.log("Event Bubbling: The event starts from the target element and bubbles up to the root of the DOM tree, triggering handlers on parent elements. Event Capturing: The event starts from the root of the DOM tree and travels down to the target element, triggering handlers on parent elements before reaching the target.");

// 46. What are set and weakSet in JavaScript?
// console.log("Set: A collection of unique values. It allows for the addition, deletion, and checking of values and maintains insertion order. WeakSet: Similar to Set, but only stores objects as values and holds weak references to them, allowing for garbage collection when there are no other references.");

// 47. How do you debounce a function in JavaScript?
// console.log("Debouncing is a technique to limit how often a function is executed. It ensures that a function is only called after a specified delay has passed without the function being triggered again. This is useful for optimizing performance in response to events like scrolling or typing. Example: function debounce(func, wait) { let timeout; return function(...args) { clearTimeout(timeout); timeout = setTimeout(() => func.apply(this, args), wait); }; }");

// 48. What is Object.freeze() in JavaScript?
// console.log("Object.freeze() is a method that prevents modifications to an object. Once an object is frozen, you cannot add, delete, or change its properties. This method makes an object immutable.");

// 49. What are the differences between slice() and splice() methods in arrays?
// console.log("slice(): Returns a shallow copy of a portion of an array into a new array object, without modifying the original array. Example: const array = [1, 2, 3, 4]; const newArray = array.slice(1, 3); // [2, 3]. splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. Example: const array = [1, 2, 3, 4]; array.splice(2, 1, 'a', 'b'); // [1, 2, 'a', 'b', 4]");

// 50. What is the difference between apply() and call() methods in JavaScript?
// console.log("apply(): Calls a function with a specified this value and arguments provided as an array. Example: func.apply(thisArg, [arg1, arg2]); call(): Calls a function with a specified this value and arguments provided individually. Example: func.call(thisArg, arg1, arg2);");

// 51. What is the Reflect API in JavaScript and what is it used for?
// console.log("The Reflect API provides methods for interacting with objects that are similar to the operations available on the Object object. It includes methods for defining properties, getting and setting property values, and intercepting operations, such as Reflect.get(), Reflect.set(), and Reflect.has(). It's used to perform operations on objects in a more controlled way and to create custom behaviors for object operations.");

// 52. How does JavaScript handle asynchronous errors?
// console.log("Asynchronous errors in JavaScript are typically handled using .catch() methods on promises or try...catch blocks with async/await. Unhandled promise rejections can be caught using process.on('unhandledRejection') in Node.js, or by listening for the unhandledrejection event in the browser.");

// 53. What is the purpose of Object.assign() in JavaScript?
// console.log("Object.assign() is used to copy values from one or more source objects to a target object. It performs a shallow merge, meaning that it only copies properties at the first level and does not handle nested objects. It’s often used for cloning objects or merging multiple objects into one.");

// 54. What are the different ways to create objects in JavaScript?
// console.log("Objects in JavaScript can be created in several ways: 1) Object Literals: const obj = { key: 'value' }; 2) Constructor Functions: function Person(name) { this.name = name; } const person = new Person('Alice'); 3) Classes: class Person { constructor(name) { this.name = name; } } const person = new Person('Alice'); 4) Object.create(): const proto = { greet() { console.log('Hello'); } }; const obj = Object.create(proto);");

// 55. What is Array.prototype.reduceRight() and how does it differ from Array.prototype.reduce()?
// console.log("Array.prototype.reduceRight() works similarly to reduce(), but it processes the array elements from right to left instead of left to right. This can be useful when the order of operations is important. Example: const array = [1, 2, 3]; const result = array.reduceRight((acc, val) => acc + val); // 6");

// 56. Explain the with statement in JavaScript.
// console.log("The with statement extends the scope chain for a statement. It allows you to access the properties of an object without explicitly referencing the object. However, it is considered harmful due to its potential to create confusing and error-prone code, and it is not recommended for use. It is also deprecated in strict mode.");

// 57. What is the instanceof operator used for in JavaScript?
// console.log("The instanceof operator tests whether an object is an instance of a specific class or constructor function. It checks if the object’s prototype chain includes the prototype of the constructor function. Example: const arr = [1, 2, 3]; console.log(arr instanceof Array); // true");

// 58. What is the new keyword and how does it work in JavaScript?
// console.log("The new keyword creates a new instance of a constructor function. It sets up the new object’s prototype chain and binds this to the new instance. It also returns the new object unless the constructor function explicitly returns a different object. Example: function Person(name) { this.name = name; } const person = new Person('Alice');");

// 59. What is the difference between setTimeout and setImmediate?
// console.log("setTimeout(fn, delay): Executes fn after a minimum delay of delay milliseconds, with the delay being set relative to the time the function is added to the queue. setImmediate(fn): Executes fn on the next iteration of the event loop, after I/O events, in Node.js environments.");

// 60. What are Web Workers and how are they used?
// console.log("Web Workers allow for running scripts in background threads, separate from the main execution thread of a web application. This allows for concurrent execution of JavaScript code without blocking the user interface. They are used for tasks such as data processing, computations, and other time-consuming operations.");

// 61. What is the Proxy object in JavaScript?
// console.log("The Proxy object allows you to create a handler for an object that can intercept and redefine fundamental operations such as property lookup, assignment, enumeration, and function invocation. It provides a way to create custom behaviors for object interactions.");

// console.log(`const target = {};
// const handler = {
//   get: (obj, prop) => \`Property \${prop} was accessed\`
// };
// const proxy = new Proxy(target, handler);
// console.log(proxy.name); // "Property name was accessed"`);

// 62. What is the Object.create() method used for?
// console.log("Object.create() creates a new object with the specified prototype object and properties. It is often used to create a new object that inherits from another object.");

// console.log(`const proto = { greet() { console.log('Hello'); } };
// const obj = Object.create(proto);
// obj.greet(); // "Hello"`);

// 63. What is the Symbol.iterator and how is it used?
// console.log("Symbol.iterator is a well-known symbol used to define the default iterator for an object. It is a method that returns an iterator object which adheres to the iterator protocol. It allows objects to be iterable using for...of loops or other iteration methods.");

// console.log(`const iterable = {
//   *[Symbol.iterator]() {
//     yield 1;
//     yield 2;
//     yield 3;
//   }
// };
// for (const value of iterable) {
//   console.log(value); // 1, 2, 3
// }`);

// 64. What is the difference between Object.keys(), Object.values(), and Object.entries()?
// console.log("Object.keys(obj): Returns an array of the object's own enumerable property names (keys). Object.values(obj): Returns an array of the object's own enumerable property values. Object.entries(obj): Returns an array of the object's own enumerable property [key, value] pairs.");

// console.log(`const obj = { a: 1, b: 2 };
// console.log(Object.keys(obj));   // ["a", "b"]
// console.log(Object.values(obj)); // [1, 2]
// console.log(Object.entries(obj)); // [["a", 1], ["b", 2]]`);

// 65. What is the Array.prototype.find() method and how does it differ from Array.prototype.filter()?
// console.log("Array.prototype.find(): Returns the first element that satisfies the provided testing function. If no elements match, it returns undefined. Array.prototype.filter(): Returns a new array with all elements that pass the provided testing function. If no elements match, it returns an empty array.");

// console.log(`const numbers = [1, 2, 3, 4];
// const result = numbers.find(x => x > 2); // 3

// const resultFilter = numbers.filter(x => x > 2); // [3, 4]`);

// 66. What are Array.prototype.flat() and Array.prototype.flatMap() methods?
// console.log("Array.prototype.flat(depth): Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. The default depth is 1. Array.prototype.flatMap(callback): First maps each element using the callback function, then flattens the result into a new array. It performs the map and flatten operations in one step.");

// console.log(`const arr = [1, [2, [3, [4]]]];
// console.log(arr.flat(2)); // [1, 2, 3, [4]]

// const arrMap = [1, 2, 3];
// console.log(arrMap.flatMap(x => [x, x * 2])); // [1, 2, 2, 4, 3, 6]`);

// 67. What is the Array.prototype.sort() method and how does it work?
// console.log("The Array.prototype.sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, and it converts elements to strings for comparison. You can provide a compare function to customize the sort order.");

// console.log(`const numbers = [4, 2, 3, 1];
// numbers.sort(); // [1, 2, 3, 4]

// const words = ['banana', 'apple', 'cherry'];
// words.sort(); // ['apple', 'banana', 'cherry']`);

// 68. What is the difference between Object.freeze() and Object.seal()?
// console.log("Object.freeze(obj): Makes an object immutable. You cannot add, delete, or modify any properties of the object. Object.seal(obj): Prevents the addition or deletion of properties but allows modifications to existing properties.");

// console.log(`const obj = { a: 1 };
// Object.freeze(obj);
// obj.a = 2; // No effect

// const objSeal = { a: 1 };
// Object.seal(objSeal);
// objSeal.a = 2; // Allowed
// delete objSeal.a; // Not allowed`);

// 69. What are WeakMap and WeakSet, and how do they differ from Map and Set?
// console.log("WeakMap: Holds key-value pairs where keys are objects and values can be any type. It allows for garbage collection of keys when there are no other references. WeakSet: Holds unique objects and allows garbage collection of objects when there are no other references. Both WeakMap and WeakSet do not prevent their key objects from being garbage collected, unlike Map and Set.");

// console.log(`const wm = new WeakMap();
// const obj = {};
// wm.set(obj, 'value');

// const ws = new WeakSet();
// ws.add(obj);`);

// 70. How does JavaScript's garbage collection work?
// console.log("JavaScript uses automatic garbage collection to reclaim memory. It primarily relies on reference counting and mark-and-sweep algorithms. Objects are cleaned up when there are no references to them, meaning they are no longer reachable or used in the application.");

// 71. What is the purpose of the Reflect API in JavaScript?
// console.log("The Reflect API provides methods for interacting with objects in a more controlled and functional manner. It is used for performing operations such as property access, setting, and defining properties, and working with the prototype chain. It mirrors the behavior of some Object methods and provides methods to intercept operations, which is useful for implementing custom behaviors and meta-programming.");

// 72. What is the difference between Object.keys(), Object.values(), and Object.entries()?
// console.log("Object.keys(obj): Returns an array of the object's own enumerable property names (keys). Object.values(obj): Returns an array of the object's own enumerable property values. Object.entries(obj): Returns an array of the object's own enumerable property [key, value] pairs.");

// console.log(`const obj = { a: 1, b: 2 };
// console.log(Object.keys(obj)); // ["a", "b"]
// console.log(Object.values(obj)); // [1, 2]
// console.log(Object.entries(obj)); // [["a", 1], ["b", 2]]`);

// 73. What is Array.prototype.concat() used for?
// console.log("The Array.prototype.concat() method is used to merge two or more arrays. It returns a new array that consists of the elements from the original arrays.");

// console.log(`const array1 = [1, 2];
// const array2 = [3, 4];
// const merged = array1.concat(array2); // [1, 2, 3, 4]`);

// 74. What is Symbol in JavaScript and how is it used?
// console.log("Symbol is a primitive data type introduced in ES6 that represents a unique and immutable identifier. Symbols are often used to add unique properties to objects that won’t conflict with other property names.");

// console.log(`const sym = Symbol('description');
// const obj = { [sym]: 'value' };
// console.log(obj[sym]); // 'value'`);

// 75. What is a Set in JavaScript and what are its methods?
// console.log("A Set is a collection of unique values. It can store any type of values and ensures that each value occurs only once. Some key methods include: add(value): Adds a value to the set. delete(value): Removes a value from the set. has(value): Checks if a value is in the set. clear(): Removes all values from the set.");

// console.log(`const set = new Set();
// set.add(1);
// set.add(2);
// set.add(1); // Duplicate value, ignored
// console.log(set.has(1)); // true
// set.delete(1);
// console.log(set.has(1)); // false`);

// 76. What are class fields and how are they used in JavaScript?
// console.log("Class fields are properties that can be defined directly within a class without needing a constructor. They can be public or private. Private class fields are declared with a # prefix and are only accessible within the class.");

// console.log(`class MyClass {
//   publicField = 42; // Public field
//   #privateField = 100; // Private field

//   getPrivateField() {
//     return this.#privateField;
//   }
// }`);

// 77. What is the await operator and how does it work with async functions?
// console.log("The await operator is used inside async functions to pause the execution until a promise is resolved. It simplifies working with promises by allowing asynchronous code to be written in a synchronous style.");

// console.log(`async function fetchData() {
//   const response = await fetch('https://api.example.com/data');
//   const data = await response.json();
//   return data;
// }`);

// 78. What are template literals and how do they differ from regular strings?
// console.log("Template literals are enclosed by backticks (`) and allow for multi-line strings and interpolation of variables or expressions using ${}. They provide a more flexible way to work with strings compared to regular strings, which are enclosed in single or double quotes.");

// console.log(`const name = 'Alice';
// const message = \`Hello, \${name}!\`; // Template literal with interpolation`);

// 79. What is the typeof operator and what are its possible return values?
// console.log("The typeof operator returns a string indicating the type of the unevaluated operand. Possible return values are: \"undefined\", \"boolean\", \"number\", \"bigint\", \"string\", \"symbol\", \"object\" (for objects, arrays, and null), \"function\".");

// console.log(`console.log(typeof 'string'); // 'string'
// console.log(typeof 42); // 'number'
// console.log(typeof {}); // 'object'
// console.log(typeof null); // 'object'`);

// 80. What is the Object.entries() method and how is it used?
// console.log("Object.entries() returns an array of the object's own enumerable string-keyed property [key, value] pairs. This method is useful for iterating over an object’s properties.");

// console.log(`const obj = { a: 1, b: 2 };
// console.log(Object.entries(obj)); // [['a', 1], ['b', 2]]`);

// 81. What is JavaScript's event delegation and why is it useful?
// console.log("Event delegation is a technique where a single event listener is attached to a parent element to handle events for its child elements. It leverages event bubbling to manage events more efficiently, reducing the number of event listeners and improving performance.");

// console.log(`document.getElementById('parent').addEventListener('click', function(event) {
//   if (event.target.matches('.child')) {
//     console.log('Child element clicked');
//   }
// });`);

// 82. What is Object.prototype.hasOwnProperty() used for?
// console.log("Object.prototype.hasOwnProperty() checks if an object has a property as its own (not inherited). It returns true if the property exists directly on the object, and false otherwise.");

// console.log(`const obj = { key: 'value' };
// console.log(obj.hasOwnProperty('key')); // true
// console.log(obj.hasOwnProperty('toString')); // false`);

// 83. What is the difference between var, let, and const?
// console.log("var: Function-scoped or globally-scoped variable declarations that are hoisted. Can be re-assigned and re-declared. let: Block-scoped variable declarations that are not hoisted and can be re-assigned but not re-declared within the same scope. const: Block-scoped variable declarations that are not hoisted and cannot be re-assigned or re-declared. Used for constants or immutable bindings.");

// console.log(`var x = 1;
// let y = 2;
// const z = 3;`);

// 84. How does JavaScript's this context work?
// console.log("this refers to the context in which a function is executed. Its value depends on how the function is called: Global Context: this refers to the global object (window in browsers, global in Node.js). Object Method: this refers to the object the method is called on. Constructor Function: this refers to the new instance being created. Arrow Functions: this is lexically bound, meaning it refers to the this value of its enclosing context.");

// console.log(`function showThis() {
//   console.log(this);
// }
// showThis(); // Global object

// const obj = { showThis };
// obj.showThis(); // obj

// const instance = new showThis(); // instance of showThis

// const arrowFunc = () => console.log(this);
// arrowFunc(); // Enclosing context's \`this\``);

// 85. What are default parameters in JavaScript?
// console.log("Default parameters allow functions to have default values for parameters if no arguments or undefined are passed. They provide a way to set initial values for function parameters.");

// console.log(`function greet(name = 'Guest') {
//   console.log(\`Hello, \${name}\`);
// }
// greet(); // "Hello, Guest"
// greet('Alice'); // "Hello, Alice"`);

// 86. What are setInterval and setTimeout and how do they differ?
// console.log("setInterval(callback, delay): Executes the callback function repeatedly at specified intervals (delay in milliseconds). setTimeout(callback, delay): Executes the callback function once after a specified delay (delay in milliseconds).");

// console.log(`setInterval(() => console.log('Repeated every 2 seconds'), 2000);
// setTimeout(() => console.log('Executed once after 3 seconds'), 3000);`);

// 87. What is currying in JavaScript?
// console.log("Currying is a functional programming technique where a function is transformed into a series of functions, each taking a single argument. It allows partial application of functions.");

// console.log(`function multiply(a) {
//   return function(b) {
//     return a * b;
//   };
// }
// const multiplyBy2 = multiply(2);
// console.log(multiplyBy2(5)); // 10`);

// 88. What is the Proxy object used for in JavaScript?
// console.log("The Proxy object allows you to create a handler for an object that intercepts and customizes operations performed on that object, such as property access, assignment, and function calls. It's used for meta-programming and can alter default behavior of objects.");

// console.log(`const handler = {
//   get: (target, prop) => \`Property \${prop} accessed\`
// };
// const proxy = new Proxy({}, handler);
// console.log(proxy.name); // "Property name accessed"`);

// 89. What are Symbols and how are they used?
// console.log("Symbols are unique and immutable primitive values used as object property keys. They are used to create properties that are guaranteed to be unique and are not subject to accidental property overwriting.");

// console.log(`const sym1 = Symbol('description');
// const obj = { [sym1]: 'value' };
// console.log(obj[sym1]); // 'value'`);

// 90. What is the event loop and how does it work in JavaScript?
// console.log("The event loop is a mechanism that handles asynchronous operations in JavaScript. It continuously checks the call stack and the message queue. When the stack is empty, it processes the first event in the queue, allowing asynchronous callbacks to execute. This enables non-blocking I/O operations and allows JavaScript to handle events and perform tasks concurrently.");

// console.log(`console.log('Start');
// setTimeout(() => console.log('Timeout'), 0);
// console.log('End');

// // Output:
// // Start
// // End
// // Timeout`);

// 91. What is an Object in JavaScript?
// Definition:
// An object in JavaScript is a data structure that allows you to store collections of key-value pairs.
// Each key (also known as a property) is a string or symbol, and each value can be any data type, including other objects.
// Objects are used to represent and manage complex data by grouping related information together.

// Characteristics:
// - Key-Value Pairs: Data is stored in pairs where each key is associated with a value.
// - Mutable: Properties of an object can be added, modified, or deleted after the object is created.
// - Dynamic: New properties or methods can be added at runtime.

// Example:
const person = {
    name: 'Alice',
    age: 30,
    greet: function() {
      return `Hello, my name is ${this.name}`;
    }
  };
  
  // Accessing properties
//   console.log(person.name); // Alice
//   console.log(person['age']); // 30
  
  // Calling a method
//   console.log(person.greet()); // Hello, my name is Alice
  
  // Adding a new property
  person.job = 'Engineer';
  
  // Modifying a property
  person.age = 31;
  
  // Deleting a property
  delete person.job;
  
  // Use Cases:
  // - Modeling Real-World Entities: Objects are ideal for representing complex entities with multiple attributes, such as a person with a name and age.
  // - Storing Configuration Data: Objects can be used to hold configuration settings for applications.
  
  // 92. What is an Array in JavaScript? How does it differ from an Object?
  
  // Definition:
  // An array is a special type of object in JavaScript used to store ordered collections of values.
  // Arrays use numerical indices to access their elements and can hold items of any type, including other arrays and objects.
  
  // Characteristics:
  // - Indexed: Elements are accessed using numerical indices, starting from 0.
  // - Mutable: Elements can be modified, added, or removed after the array is created.
  // - Dynamic Size: Arrays can automatically adjust their size as elements are added or removed.
  
  // Example:
  const fruits = ['apple', 'banana', 'cherry'];
  
  // Accessing elements
//   console.log(fruits[0]); // apple
//   console.log(fruits[2]); // cherry
  
  // Adding elements
  fruits.push('date');
  
  // Removing elements
  fruits.pop(); // Removes 'date'
  
  // Iterating over an array
  for (const fruit of fruits) {
    // console.log(fruit);
  }
  
  // Array methods
//   console.log(fruits.length); // Number of elements
//   console.log(fruits.indexOf('banana')); // Index of 'banana'
  
  // Use Cases:
  // - Storing Lists: Arrays are ideal for storing and managing collections of items, such as a list of fruits or numbers.
  // - Iteration: Use arrays when you need to perform operations on a series of data items, such as looping through a list of elements.
  
  // Difference from Object:
  // - Indexing: Arrays use numerical indices to access elements, while objects use keys (which are strings or symbols).
  // - Order: Arrays maintain the order of elements, while objects do not guarantee order.
  
  // 93. What is a Function in JavaScript? What are the different ways to define a function?

  // Definition:
  // A function in JavaScript is a reusable block of code designed to perform a specific task.
  // Functions can accept input parameters, execute code, and return a result.
  // They are essential for creating modular and maintainable code.
  
  // Characteristics:
  // - Encapsulation: Functions encapsulate code into reusable blocks that can be executed when called.
  // - Parameters and Arguments: Functions can accept parameters, which are values passed to them during execution.
  // - Return Values: Functions can return results using the return statement.
  
  // Ways to Define a Function:
  
  // Function Declaration:
  function add(a, b) {
    return a + b;
  }
  
  // Function Expression:
  const subtract = function(a, b) {
    return a - b;
  };
  
  // Arrow Function (ES6 Syntax):
  const multiply = (a, b) => a * b;
  
  // Function with Default Parameter:
  function greet(name = 'Guest') {
    return `Hello, ${name}`;
  }
  
  // Example:
//   console.log(greet()); // Hello, Guest
//   console.log(greet('Alice')); // Hello, Alice
  
  // Use Cases:
  // - Code Reusability: Functions allow you to write code that can be reused with different inputs.
  // - Modular Code: Functions help break down complex problems into smaller, manageable pieces.
  