const  math = function(num1) {
    return {
        plus: (num2) => num1 + num2,
        minus: (num2) => num1 - num2,
        mult: (num2) => num1 * num2,
        divide: (num2) => num1 / num2,
    };
};

calc = math(10);

console.log(calc.plus(5));   // 15 
console.log(calc.minus(3));  // 7 
console.log(calc.mult(4));  // 40
console.log(calc.divide(2));
console.log(calc.divide(0));

console.log(math(10).plus(5));  // 15
console.log(math(10).minus(3)); // 7
console.log(calc["minus"](3));   // 7



//// different, ai generated


// const math = function(num1) {
    
//     // 1. Separate declaration and logic for the 'plus' function
//     const plusFunction = function(num2) {
//         return num1 + num2; 
//     };

//     // 2. Separate declaration and logic for the 'minus' function
//     const minusFunction = function(num2) {
//         return num1 - num2;
//     };

//     // 3. Separate declaration and logic for the 'mult' function
//     const multFunction = function(num2) {
//         return num1 * num2;
//     };

//     // 4. Separate declaration and logic for the 'divide' function
//     const divideFunction = function(num2) {
//         return num1 / num2;
//     };

//     // 5. Create a separate object to store references to our functions
//     const operationsObject = {
//         plus: plusFunction,
//         minus: minusFunction,
//         mult: multFunction,
//         divide: divideFunction
//     };

//     // 6. Final return statement that outputs the completed object
//     return operationsObject;
// };

// // --- Execution (Works exactly the same as your original code) ---
// const calc = math(10); 

// console.log(calc.plus(5));   // 15
// console.log(calc.minus(3));  // 7
// console.log(calc.mult(4));   // 40
// console.log(calc.divide(2)); // 5
