const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString()); //
// console.log(balance.toString().length); // 3
// console.log(balance.toFixed(2));  // 100.00

const otherNumber = 123.8966;

// console.log(otherNumber.toPrecision(3)); // 124
// console.log(otherNumber.toPrecision(4)); // 123.9

const hundreds = 1000000;
// console.log(hundreds.toLocaleString("en-IN")); // sekda wala concepet hai yha per en-IN se indian standerd ke hisab se chalta hai

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math); // typeof is object  interview
// console.log(Math.abs(-4)); // 4
// console.log(Math.round(4.6)); // 5
// console.log(Math.ceil(4.2)); //5
// console.log(Math.floor(4.9)); // 4
// console.log(Math.min(4, 3, 6, 8)); // 3
// console.log(Math.max(4, 3, 6, 8)); // 8

// console.log(Math.random()); // genret rendom numbers   valus jo aaygi vo 0 or 1 ke bhi me aati hai
// console.log(Math.random() * 10 + 1);    // yha per valu 1 se 10 ke bhich me hi aaygi
// console.log(Math.floor(Math.random() * 10) + 1); // yha per valu 1 se 10 ke bhich me hi aaygi per . ke baad ki values nhi aaygi

const min = 10;
const max = 20;

// console.log(Math.floor(Math.random() * (max - min + 1)) + min);  // syha per values 10 se 20 ke bhich me hi aaygi
