                 // (Promise class) PROMISES :
                 //                        Promises class give you a promise, that I will return you something in the future. 

                                            // defining a promise is hard
                                            //using a promise is easy

// A promise in Javascript is an object that represents the eventual completion (or failure) of an synchronous operation and its resulting value.


function setTimeoutPromisified(ms) {        //ms = millisecond
    return new Promise(resolve => setTimeout(resolve, ms));
}
function callback () {
   console.log("5 seconds have passed");                     //Returns an object of an promise class.     
}

setTimeoutPromisified(5000).then(callback)

//////////////////////////////////////////////////////

function waitFor3S(resolve) {
    setTimeout(resolve, 6000)
}

function main() {
    console.log("main is called")
}

waitFor3S(main)


//////////////////////////////////////////////////////

function random() {

}
let p = new Promise(random);  
console.log(p);