// const tinderUser = new Object()       //y ek singleton object hai
const tinderUser = {}; //y ek nonsingleton object hai

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "hitesh", // is traha hum nesting kar skte hai
      lastname: "choudhary",
    },
  },
};

// console.log(regularUser.fullname.userfullname.firstname);     // or is traha hum ise acsees kar skte hai

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)       // in valus ko add krne ke liy is syntex ka use kiya jata hai

// const obj3 = {...obj1, ...obj2}         //spred operetor ka use krna hai 90% times on addtion
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
];

users[1].email;
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));         // objects se Array me convert krne ke li is methde ka use kiya jata hai    key me hme only name or id jese elements milte hai
// console.log(Object.values(tinderUser));       // isme hme objects ki value milti hai or y hme Array me data deta hai
// console.log(Object.entries(tinderUser));      // isme data hme Array ke ander Array me milega exampal => [ ['id', '123abc'] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));    //y properti check krne ke liy kam me aata hai ki uske pass y key or valu hai ya nhi

const course = {
  coursename: "js in hindi",
  price: "999", // object ko destrukcher kene ka trika
  courseInstructor: "hitesh",
}[
  // course.courseInstructor

  // const {courseInstructor: instructor} = course      //is traha aap object ko destrucher kar skte hai   // kisi chij ko baar baar console krne ke bjay aap usko destructor kar skte hai jisse ki code smart ban jat hai
  // : lga ke aap key name bhi change kar skte hai
  // console.log(courseInstructor);
  // console.log(instructor);

  // How to destruct an objects in JavaScript?
  // To destructure an object in JavaScript, you can use the destructuring assignment syntax. The syntax makes it possible to unpack values from objects into distinct variables 123. Here’s an example:
  // const obj = { a: 1, b: 2, c: 3 };
  // const { a, b, c } = obj;
  // console.log(a); // 1
  // console.log(b); // 2
  // console.log(c); // 3

  // In the above example, we have an object obj with three properties. We then use destructuring assignment to unpack the values of the object into three separate variables a, b, and c. The variables a, b, and c are assigned the values 1, 2, and 3, respectively.

  // You can also use destructuring assignment to unpack only some of the properties of an object. Here’s an example:

  // const obj = { a: 1, b: 2, c: 3 };
  // const { a, c } = obj;
  // console.log(a); // 1
  // console.log(c); // 3

  // In the above example, we have an object obj with three properties. We then use destructuring assignment to unpack only the first and third properties of the object into two separate variables a and c. The variable b is skipped.

  // {
  //     "name": "hitesh",
  //     "coursename": "js in hindi",    // y json formet hai
  //     "price": "free"
  // }

  ({},
  {}, // y json formet hai
  {})
];
