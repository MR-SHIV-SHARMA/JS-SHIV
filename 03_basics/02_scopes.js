// var c = 300      //note useable
// let a = 300; //that is a global scope
if (true) {
  let a = 10;
  const b = 20;
  // console.log("INNER: ", a);      //that is a block scope ya local scope
}

// console.log(a);
// console.log(b);
// console.log(c);       //note use for codeing in 2024

function one() {
  const username = "hitesh";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website);

  // two();
}

// one()

if (true) {
  const username = "hitesh";
  if (username === "hitesh") {
    const website = " youtube";
    // console.log(username + website);      that is a nested scope
  }
  // console.log(website);
}

// console.log(username);

// ++++++++++++++++++ interesting ++++++++++++++++++

// console.log(addone(5));

function addone(num) {
  return num + 1;
}

// addTwo(5); //connote access addtwo befor initialization
const addTwo = function (num) {
  return num + 2;
};
