// console.log({} == {}); //that is object placeholder, so it is false, because they are compared by reference in memory, not by value
// console.log({} === {}); //same reason
// console.log({}) //viewing the object, it is empty, but it is still an object

// console.log({} == "[object Object]"); // true, because the object is converted to a string "[object Object]" and then compared to the string "[object Object]"
// console.log("[object Object]");
// console.log({} === "[object Object]"); // false, because the object is not converted to a string, so they are different types and not equal
// console.log(typeof "[object Object]"); //helping to understand the previous line, it is a string, not an object

// console.log({} == true); // false, because the object is not converted to a boolean
// console.log(typeof {}); //helping to understand the previous line, it is an object, not a boolean
// console.log({} == false); // false, because the object is not converted to a boolean

// console.log({} == 0); // false, because the object is not converted to a number
// console.log({} == NaN); // false, because the object is not converted to NaN and we know that NaN is not equal to anything, even itself

console.log(Number({}))
console.log(String({}))
console.log(String(true))