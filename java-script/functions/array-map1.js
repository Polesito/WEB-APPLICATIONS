
let A = [1, 2, 3, 4, 5, 6, 7, 8];

let by_hand = [];
for (let a of A) {
    by_hand.push(a + 1)
}

let by_map = A.map(function(x) { return x + 1; });              // Pressing F2 u can rename all variables with the same name

console.log(A);
console.log(by_mapping);
console.log(by_hand);