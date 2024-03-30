// console.log("Getting started with event");

// javascript ek synchronous langage hai iska mtlab phle ek code excute hoga fir dusra fir tisra ese number vais excute hota hai

// single threaded language hai ek hi thread per sab kuchh excute hoga
// javascript ka jo injin hai vo runtime envaiyrment me hota hai jis vjaha se y language slowe hona ka fil nhi hone deti hai
// y dono defoult behaviyr hai java script ke

// Execution context => execute one line of code at a time (isme code line by line excute hota hai)
// isme phle wala kam pura kiya jata hai jab tak vo pura nhi hota hai tab tak aage ka kam nhi hoga line by line kam hoga
// (each operation waits for the last one to complete before executing)

// fir aata hai call stack or memory heap

// Blocking Code vs Non Blocking Code

// Blocking Code => Block the flow of Program (ex. aap yha betiy me aapke liy paani lekr aata hu tab tak aap kuchh mat krna to na aap tv chla skte hai or na hi phone to yha per aap blok ho gye ho mere aane tak)
// Read File Sync (file read krke aa gya per excute nhi hoga)

// Non Blocking Code => Does not block ececution
// (ex. aap yha betiy or apna phone chlaiye me aapke liy paani lata hu to yha per aap block nhi huy ho)
// Read File Async (file read krke aa gya or excute bhi ho gyi)

// JS Engine => isme do chije hoti hai Memory Heap or Call Stack

// web api => isme dom api , set timeout, set interval, fetch() ,promise, register call back

// task Queae

// program jab start hota hai to js engin me call stack banta hai
// call stack me global execution contex banta hai or fir ek ek krke function loade kiye jate hai jse jse function ka execution khtam hota hai functions ko unloade kr diya jata hai

// memory heap me memory alocation hota hai bus y rhta hai hmare variables rkhe jate hai

// Asyncronis kam ko krne ke liy javascript me web api hoti hai(jese me aapko khu ki y kam mujhe 2 munites ke baad yaad dila dena)

// js engine se jo function web api me jata hai (set timeoutke pass ya or methode ke paas) vo fir ek register call back me jata hai or fir vha se TASK QUEAE me jata hai (TASK QUEAE ME JO CALL BACK HOTA HAI VO PICHHE SE JATA HAI OR AAGE SE NIKALTA HAI) or fir vha se JS ENGINE ke CALL STACK me jata hai or execute hota hai

// FETCH() => ISKA BI SAME KAM HOTA HAI BUS ISKI HIGH PRAIROTI HOTI HAI (isme kam huaa hai to bhi bta do nhi huaa hai to bhi bta do)

// y sb hi hota hai asyncronis code
