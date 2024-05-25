
// How do i define a true async function
async function sum(a, b) {
    return a + b;
}

const mult = async (a, b) => a * b;

console.log("---------------- 1");

const res1 = sum(3, 8);         // res1 is a promise, not an int value
res1.then((x) => {
    console.log(x);
});

console.log("---------------- 2");

const res2 = mult(10, 5);
res2.then((x) => {
    console.log(x);
});

console.log("---------------- 3");