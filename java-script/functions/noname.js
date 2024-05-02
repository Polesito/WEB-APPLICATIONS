
function max2_v1(a, b) {

    if(a < b ) {
        return b;
    } else {
        return a;
    }
}

let a = 5;
let max2_v2 = function (a, b) {
    return a > b ? a : b;                       // It's the same as before ? -> if | : -> else
}

let f_array = [
    function () { return 42; },
    function (x) { return x +1; }
];

console.log(max2_v1(15, 43));
console.log(max2_v2(5, 13));

console.log(f_array[0]());
console.log(f_array[1](4));