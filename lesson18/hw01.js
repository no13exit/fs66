
// function *name* = name is optional, but since it is allowed and I am copypasting - why not?

const plus = function (a, b) {
    return (a + b);
}

const minus = function minus(a, b) {
    return (a - b);
}

const mult = function mult(a, b) {
    return (a * b);
}

const divide = function divide(a, b) {
    if (!b) {return 'cannot divide by zero'} else {return (a / b)}
}

// const calc = function calc(a, act, b) {
//     switch (act) {
//         case plus:
//             return plus(a,b);
//         case minus:
//             return minus(a,b);
//         case mult:
//             return mult(a,b);
//         case divide:
//             return divide(a,b);
//         default:
//             return 'Unsupported operation'
//     }
// }


const calc = function calc(a, act, b) {
    return act(a,b);
}

// same test cases
console.log(calc(5, plus, 3));   // 8
console.log(calc(10, minus, 4)); // 6
console.log(calc(4, mult, 3));   // 12
console.log(calc(5, divide, 2)); // 2.5
console.log(calc(5, divide, 0)); // cannot divide by zero
