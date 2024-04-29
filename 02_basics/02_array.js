const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros); //y hmare sbhi arrays ko jode kar array me convert kar deta hai  //return new Array
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]; //y hmare sbhi arrays ko tod kr ek array me convert kar deta hai  // same work but spred opertor (tod ker sbhi ek kr dena)

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity); //y hmare sbhi arrays ko tod kr ek array me convert kar deta hai  // flat ko hum defth bhi de skte hai
// console.log(real_another_array);

// console.log(Array.isArray("Hitesh")); //Array.isArray se app check kar skte hai ki y ek array hai ya nhi hai
// console.log(Array.from("Hitesh")); // Array.from se ham string ko Array me convert kar skte hai
// console.log(Array.from({ name: "hitesh" })); // interesting             // isme hme deta ke liy key ya valu deni hoti hai   // y jo Array.from hai y hmare data ko array me converty kar deta hai

let score1 = 100;
let score2 = 200;
let score3 = 300;

// console.log(Array.of(score1, score2, score3)); // y jo Array.of hai y hmare data ko array me converty kar deta hai

// How to destruct an array in JavaScript?

// To destructure an array in JavaScript, you can use the destructuring assignment syntax. The syntax makes it possible to unpack values from arrays into distinct variables 1. Here’s an example:

// const arr = [1, 2, 3];
// const [a, b, c] = arr;
// console.log(a); // 1
// console.log(b); // 2
// console.log(c); // 3
// In the above example, we have an array arr with three elements. We then use destructuring assignment to unpack the values of the array into three separate variables a, b, and c. The variables a, b, and c are assigned the values 1, 2, and 3, respectively.

// You can also use destructuring assignment to unpack only some of the values of an array. Here’s an example:

// const arr = [1, 2, 3];
// const [a, , c] = arr;
// console.log(a); // 1
// console.log(c); // 3
// In the above example, we have an array arr with three elements. We then use destructuring assignment to unpack only the first and third values of the array into two separate variables a and c. The variable b is skipped.
