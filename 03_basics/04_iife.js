// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
})();
                                                            //two IIFE
((name) => {
    console.log(`DB CONNECTED TWO ${name}`);                //veriable iife  and normal iife
})('hitesh');
