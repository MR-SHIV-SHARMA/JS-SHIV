// kis traha se data ko memory me rkha jata hai or access kiya jata hai us basse per data ka 2 chetegoraigeson hai // premitive or // non premitive

//  Primitive

//  7 types : String, Number, Boolearn, null = emptye, undefined = value is not defind, Symbol = unique, BigInt

const score = 100; // number
const scoreValue = 100.3; // number
// console.log(typeof scoreValue);

const isLoggedIn = false; // boolean
const outsideTemp = null; // empty
let userEmail; // undefind

const id = Symbol("123"); // unique identifier for this instance of the database
const anotherId = Symbol("123"); // unique identifier for this instance of the database   // typeof is symbol

// console.log(id === anotherId); // false

// const bigNumber = 3456543576654356754n

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; // this is Arrays
let myObj = {
  name: "hitesh",
  age: 22,
}; // this is Objects

const myFunction = function () {
  console.log("Hello world");
}; // this is Functions

// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// javascript dynamic typed language hai statically typed language hai ?

// Even statically typed languages can have a dynamic or variant data type that can contain different data types. JavaScript is called a dynamic language because it doesn't just have a few dynamic aspects, pretty much everything is dynamic. All variables are dynamic (both in type and existance), and even the code is dynamic.

// Is JavaScript a dynamically typed language?

// Yes, **JavaScript** is a **dynamically typed language** ¹²³. This means that the type of a variable is determined at runtime, rather than at compile time. In other words, the type of a variable can change during the execution of a program. This allows for more flexibility in coding, but can also lead to errors if not handled properly.

// (1) types - Is JavaScript an untyped language? - Stack Overflow. https://stackoverflow.com/questions/964910/is-javascript-an-untyped-language.
// (2) #5) Is JavaScript a statically typed or Dynamically typed language. https://dev.to/myk/5-is-javascript-a-statically-typed-or-dynamically-typed-language-232e.
// (3) why javascript is considered as a dynamic language?. https://blog.anasouardini.online/posts/why-javascript-is-considered-as-a-dynamic-language/.
// (4) Why JavaScript is a Dynamic Language? | by Subodh Kumar | JavaScript in .... https://javascript.plainenglish.io/why-javascript-is-a-dynamic-language-ff4e849406f0.
// (5) Dynamic typing - MDN Web Docs Glossary: Definitions of Web-related .... https://developer.mozilla.org/en-US/docs/Glossary/Dynamic_Typing.

// the type operetor
// Description
// The following table summarizes the possible return values of typeof. For more information about types and primitives, see also the JavaScript data structure page.

// Type	Result
// Undefined	"undefined"
// Null	"object" (reason)
// Boolean	"boolean"
// Number	"number"
// BigInt	"bigint"
// String	"string"
// Symbol	"symbol"
// Function (implements [[Call]] in ECMA-262 terms; classes are functions as well)	"function"  (call by object function)
// Any other object	"object"

// Stack (Primitive), Heap (Non Primitive)  //must bu read for interview

// C:\Users\shiv\Downloads\JS-BY-SHIV-SHARMA-main\JS-BY-SHIV-SHARMA-main\js-hindi\01_basics\stack and heap code.png
// C:\Users\shiv\Downloads\JS-BY-SHIV-SHARMA-main\JS-BY-SHIV-SHARMA-main\js-hindi\01_basics\stack and heap.png
// C:\Users\shiv\Downloads\JS-BY-SHIV-SHARMA-main\JS-BY-SHIV-SHARMA-main\js-hindi\01_basics\Stack and heap in deatiles.jpeg

// call stack working

// Call Stack & Memory heap
// Call Stack:
// Call Stack is the place where the code execution has been tracked.

// Every data in the call stack will be pointed to the memory heap.

// Follows Last In First Out (LIFO).

// Memory Heap:
// Memory heap is the place where the memory is allocated for the variables and functions etc.

// Stack Overflow:
// When the function runs inside and inside, the call stack will be filled and overflows.

// When the stack overflows, Maximum call stack size exceeded error will be thrown.

// The below function runs inside and inside and the stack will be overflowed.

// Copy
// Ex:
// function inception() {
//     inception();
// }
//  inception();
// Garbage Collection:
// JavaScript automatically cleans out the memory allocated to the data after its execution. For example when the memory allocated for the variable created inside the function, it will be cleared after the function execution automatically.

// It will manages the memory leaks.

// It will automatically controls the memory heap.

// It follows Mark and Sweep algorithm to handle Garbage collection.

// Memory Leaks:
// Memory leaks occurred when the data is overloaded (Infinite data into an array), it breaks the browser.

// Copy
// Ex:
// let array = [];
// for(let i=1; i>0; i++) {
//     array.push(i);
// }

let myYoutubename = "hiteshchoudharydotcom";

let anothername = myYoutubename;
anothername = "chaiaurcode";

// console.log(myYoutubename);
// console.log(anothername);

let userOne = {
  email: "user@example.com",
  upi: "user@example",
};

let userTwo = userOne;

userTwo.email = "hitesh@example.com";

// console.log(userOne.email);
// console.log(userTwo.email);
