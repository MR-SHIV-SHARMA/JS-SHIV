// question =>  js me Meth.pi ki value hoti hai 3.14 mujhe use krni hai 4 ya fir 3 ho skti hai ya nhi ho skti hai to kese or nhi ho skti to kyo karn btao ?
// answer =>  pi ki value change nhi ki ja skti hai
// {
//   value: 3.141592653589793,
//   writable: false,    // in tino ko change nhi kiya ja skta isi karn se pi ki value bhi change nhi hoti hai inki value hardcoded hoti hai
//   enumerable: false,
//   configurable: false
// }
const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
  name: "ginger chai",
  price: 250,
  isAvailable: true,

  orderChai: function () {
    console.log("chai nhi bni");
  },
};

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
  //writable: false,     // yha per y hmara code hai to iska control hmare paas hota hai
  enumerable: true,
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
