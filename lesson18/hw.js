function plus(a, b) {
    return (a + b);
}

function minus(a, b) {
    return (a - b);
}

function mult(a, b) {
    return (a * b);
}

function divide(a, b) {
    if (!b) {return 'cannot divide by zero'} else {return (a / b)}
}

// console.log(minus(10, 5));

// console.log(divide(10,0))

function calc(a, act, b) {
    switch (act) {
        case plus:
            return plus(a,b);
        case minus:
            return minus(a,b);
        case mult:
            return mult(a,b);
        case divide:
            return divide(a,b);
        default:
            return 'Unsupported operation'
    }
}

// console.log(calc(5, divide, 2));

console.log(calc(5, plus, 3));   // 8
console.log(calc(10, minus, 4)); // 6
console.log(calc(4, mult, 3));   // 12
console.log(calc(5, divide, 2)); // 2.5
console.log(calc(5, divide, 0)); // cannot divide by zero