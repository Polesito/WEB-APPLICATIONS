
const sumSync = (a, b) => a + b;
const sumAsync = (a, b, callback) => {
    let sum = a + b;
    callback(sum);

}

console.log(sumSync(3, 8));
sumAsync(3, 8, (sum) => {
    console.log(sum);
})

console.log(`-------------FINISH------------`);