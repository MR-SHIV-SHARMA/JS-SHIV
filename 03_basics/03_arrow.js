const user = {
  username: "hitesh",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage()
user.username = "sam";
// user.welcomeMessage()

// console.log(this);            // interwive question most inportent      // NODE ME jo globel envayrment hota hai vo { }  empty hoyta hai    this Ki valu node me {}       this ki valu browser me windows   // jubki browser me globel object hai vo hai window object

// function chai() {
//   let username = "hitesh";
//   console.log(this.username);
// }

// chai();

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// const chai = () => {
//   let username = "hitesh";
//   console.log(this);
// };

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({ username: "hitesh" });

// console.log(addTwo(3, 4));

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
