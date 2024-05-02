
let A = [1, 2, 3, 4, 5, 6, 7, 8];


let result1 = A.map(function(x) { return x * 3; });
let result2 = A.map(function(x) { return "*".repeat(x); });
let result3 = A.map(function(x) { return `item: ${x}`; });

console.log(result1);
console.log(result2);
console.log(result3);