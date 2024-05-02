
let A = [4, 2, 5, 7, 1, 312, -2];

// Filter the element of A which ara > 5
let result = [];
for (let a of A) {
    if (a > 5) {
        result.push(a);
    }
}

console.log(result)
console.log(A.filter(x => x > 5));

// Filter objects
const fruits = [
    {name: "oranges", price: 1.99},
    {name: "kiwi", price: 6.99},
    {name: "apple", price: 2.99},
    {name: "watermelon", price: 2.49},
];

console.log(fruits.filter(f => f.price < 2.5));