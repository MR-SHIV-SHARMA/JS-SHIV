// Object literal

const user = {
  username: "hitesh",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    // console.log("Got user details from database");
    console.log(`Username: ${this.username}`);   // is block ke ander ki chijje agr aapko chaiy to aapko this. ka use krna hoga kyoki yh curnte contex ki baat krta hai 
    console.log(this);
  },
};

//console.log(user.username)
//console.log(user.getUserDetails());
//console.log(this);     // global scope me this ki valu {}  empty aati hai node me ; window object me 75 chije milti hai

// Constructor function => 

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  return this;
}

const userOne = new User("hitesh", 12, true);    // y NEW hai y hi Constructor function hai y aapko us function ki copy deta hai 
const userTwo = new User("ChaiAurCode", 11, false);
console.log(userOne.constructor);
//console.log(userTwo);