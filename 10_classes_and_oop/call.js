// first function
function SetUsername(username) {
  //complex DB calls
  this.username = username;
  //   console.log("called");
}

// second function
function createUser(username, email, password) {
  SetUsername.call(this, username); // yha per this copy le rha hai first function ki ; first ko call krna hai second me to key ke sath .call(this,) ka use krna hoga

  this.email = email;
  this.password = password;
}

// execution
const chai = new createUser("chai", "chai@fb.com", "123"); // chai ki jo key hai vo first function se aa rhi hai second me
console.log(chai);
