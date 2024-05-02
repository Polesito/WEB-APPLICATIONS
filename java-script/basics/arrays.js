
let A = [1, 2, "hi", true];
A[0] = 111;
console.log(A);
console.log(A.length);
A.push({ a: 1 });
console.log(A);

console.log("-".repeat(50));

// Iterating using and index over all elements of an array
for (let i = 0; i < A.length; i++) {
    console.log(`Element ${i}:`, A[i]);
}

// Iterating over all elements of an array
for (let elem of A) {
    console.log(elem);    
}

console.log("-".repeat(50));

let obj = {
    alpha: "a",
    beta: "b",
    gamma: "c",
    delta: "d"
};

for (let field in obj) {
    console.log(field);
}