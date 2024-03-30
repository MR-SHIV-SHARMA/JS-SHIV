
function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

function addTwoNumbers(number1, number2){    //that is a peramitor

    console.log(number1 + number2);
}

// addTwoNumbers(3, 5)      // that is aarguments

function addTwoNumbers(number1, number2) {

    // let result = number1 + number2    // return ko phle aap ek variable me hold kre fir aap baki ka kam kre
    // return result                    //return ka use krke aap result ko aap return kar skte hai
    return number1 + number2            //aap dairect bhi return kar skte hai    // return ke baad ka console print nhi hota hai
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

// user ke loggedin hone par ek msg dikhana hai

function loginUserMessage(username = "sam") {      //sam yha per defoult hai
    if (!username) {                                // y undefine hone per lagu hota hai
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))      // yha user upna name enter krta hai or v hme data me show hota hai
// console.log(loginUserMessage("hitesh"))

// add calculateCartPrice in shoping app

function calculateCartPrice(...num1) {      //...num1 y spred opertor hai or reste opertor bhi hai abhi isko reste opertor bolenge          //isme dali gyi sari valu aa jati hai 
    // function calculateCartPrice(val1, val2, ...num1){  // isme phle jo val1 dala hai vo nhi aati hai addtion me
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))  //yha per aap cart ki price add krte hai

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject) {
    // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));