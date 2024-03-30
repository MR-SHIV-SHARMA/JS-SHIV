// ES6

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }

  encryptemail() {
    return `${this.email}abcdef`;
  }
  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const chai = new User("chai", "chai@gmail.com", "123");

console.log(chai.encryptPassword()); // password change kiya gya hai
console.log(chai.changeUsername());
console.log(chai.encryptemail());

// behind the scene

// function User(username, email, password) {
//   this.username = username;
//   this.email = email;
//   this.password = password;
// }

// User.prototype.encryptPassword = function () {
//   return `${this.password}abc`;
// };
// User.prototype.changeUsername = function () {
//   return `${this.username.toUpperCase()}`;
// };

// const tea = new User("tea", "tea@gmail.com", "123");

// console.log(tea.encryptPassword());
// console.log(tea.changeUsername());

// dono method ka kam same hi hai bus ek function me hai or dusra class me define huaa hai