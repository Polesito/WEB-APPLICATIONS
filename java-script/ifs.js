
let a = 1;
let b = true;
let c = "";
let d;

if (a === 1) {
    console.log("a is 1");
}

if (b) {
    console.log("b is true");
}

if (c) {                         // if c has any characters 
    console.log("c has some charactes");
} else {
    console.log("c is empty");
}

if (d) {                        // if it is not undefined or null (is d not: empty)
    console.log("d has something");
} else {
    console.log("d is empty (either null or indefined)");
} 