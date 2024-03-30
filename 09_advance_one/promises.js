// Promise

// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// iska simpal sa matlab hai ki jo bhi aapne usko task diya hai vo abhi ke abhi queae me lgke complit nhi ho skta hai queae me to lag gya hai per abhi complete nhi ho skta vo

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

const promiseOne = new Promise(function (resolve, reject) {
  // new Promise() y hi aapka promise  ; is function ke do part hote hai (resolve, reject) in dono ka mtlab hai ki ya to promise pura hoga ya nhi hoga bus itna hi hai
  //Do an async task
  // DB calls, cryptography, network
  setTimeout(function () {
    console.log("Async task is compelete");
    resolve(); //yha per uper ke resolve or .then ko conect kiya gya hai
  }, 1000);
});

promiseOne.then(function () {
  // Promise ko consumed kiya ja rha hai ; resolve ka sidha conectin hai .then ke sath
  console.log("Promise consumed");
});

new Promise(function (resolve, reject) {
  // yha per veriable decleyr nhi kiya gya hai
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Chai", email: "chai@example.com" }); // yha per data liya gya hai ab data khi se bhi aa skta hai
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true; // yha per error diya gya hai system ko or us ke base per cheking ki ja rhi hai
    if (!error) {
      resolve({ username: "hitesh", password: "123" });
    } else {
      reject("ERROR: Something went wrong"); // reject hme error deta hai kam na hone per
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  }) // yha per chening ki ja rhi hai data base se jab data aayga to hme iski jyada jrurt pdhegi
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected")); // y to hota hi hota hai

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: "123" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));

// promise.all
// yes this is also available, kuch reading aap b kro.

// fetch() global function
// Note: This feature is available in Web Workers

// The global fetch() method starts the process of fetching a resource from the network, returning a promise that is fulfilled once the response is available.

// The promise resolves to the Response object representing the response to your request.

// question =>   promise se aapne request kri or vha se ek error code aa gya 404 to vo aapko resolve me milega ya reject milega
// answer =>     vo aapko hmesha as response hi milega vo error nhi hai error tab hoga jab vo request kr hi nhi paaya ho
// A fetch() promise only rejects when a network error is encountered (which is usually when there's a permissions issue or similar). A fetch() promise does not reject on HTTP errors (404, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.

// response = fetch('something', { kuchh or bhi bhej skte ho})

// fetch yha se do bhao me jata hai web browser  or  data
