// singleton                           // singleton object literals me nhi banta hai    constrctor se banta hai to sirf singleton banta hai Object.create y hai constractor
// Object.create

// object literals

// question =>  ek symbol lijiy or use decler karke print kar dijiy as a symbol in object

const mySym = Symbol("key1"); // symbol liya

const JsUser = {
  name: "Hitesh",
  "full name": "Hitesh Choudhary",
  [mySym]: "mykey1", // sqwar brects me dala  as a key valu
  age: 18,
  location: "Jaipur",
  email: "hitesh@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email)
// console.log(JsUser["email"])                       // objects ko accses krne ka shi trika y hai [ ]  isse acsses kro
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])    // printf kar diya

JsUser.email = "hitesh@chatgpt.com";
// Object.freeze(JsUser)                                   // objects ko freeze karne par error kuchh nhi aata hai bus uske baad jo changes kiye jata hai vo kam nhi karte hai use phle ke hi karte hai
JsUser.email = "hitesh@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function () {
  // greeting ek function name hai is traha aap ek function bana ke or chije isme add kar skta hai
  console.log("Hello JS user");
};
JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());
