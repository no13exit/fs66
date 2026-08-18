
// mostly deleting things to make it work

const plus = (a, b) => (a + b);


const minus = (a, b) => (a - b);


const mult = (a, b) => (a * b);


const divide = (a, b) => b ? (a / b) : 'cannot divide by zero' ;

// const calc = (a, act, b) => {
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

 const calc = (a, act, b) => {
    return act(a,b);
 }

// same test cases
console.log(calc(5, plus, 3));   // 8
console.log(calc(10, minus, 4)); // 6
console.log(calc(4, mult, 3));   // 12
console.log(calc(5, divide, 2)); // 2.5
console.log(calc(5, divide, 0)); // cannot divide by zero


