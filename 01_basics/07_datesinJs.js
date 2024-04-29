// Dates   // dates starting at january 1 1970

let myDate = new Date();
// console.log(myDate.toString()); // Mon Apr 29 2024 15:15:08 GMT+0530 (India Standard Time)   // crunent date whith indian standard time
// console.log(myDate.toISOString()); //2024-04-29T06:37:46.635Z
// console.log(myDate.toJSON()); //2024-04-29T06:37:46.635Z
// console.log(myDate.toLocaleDateString()); // crunent date like this 29/4/2024
// console.log(myDate.toLocaleTimeString()); // crunent time like this 12:07:46 pm
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); // date typeof is object

// date is a object

let myCreatedDate = new Date(2023, 0, 23);
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
// let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

`${newDate.getDay()} and the time `; // console.log() krne per outpute milega

newDate.toLocaleString("default", {
  weekday: "long",
});
