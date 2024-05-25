
const sum = (a, b, callback) => {
    let sum = a + b;
    callback(sum);

}

const mult = (a, b, callback) => {
    let mult = a * b;
    callback(mult);

}

const subtract = (a, b, callback) => {
    let subtract = a - b;
    console.log(subtract);

}

// ((3 + 8) * 7) - 10 

sum (3, 8, (s) => {
    mult (s, 7, (m) => {
        subtract (m, 10, (result) => {
            console.log(result);
        }) 
    })
})