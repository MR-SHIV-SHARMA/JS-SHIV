// array

// The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.
// JavaScript arrays are resizable and can contain a mix of different data types.
// JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.

const myArr = [0, 1, 2, 3, 4, 5];
const myHeors = ["shaktiman", "naagraj"];

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr[1]);
// console.log(myArr2[2]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join();

// console.log(myArr);
// console.log(newArr);

// slice, splice

// const myArr = [0, 1, 2, 3, 4, 5];
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3); // slice orignal array me menuplet nhi krta hai uski copy deta hai  y ek stack memory ka exampale hai

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3); //splice original array me menuplet krta hai y hme copy nhi deta hai y ek hipe memory ka exampale hai
console.log("C ", myArr);
console.log(myn2);

// [] y hai squre brekets
// () y hai peran thiseses
// {} y hai breses ya crli breses
