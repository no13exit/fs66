let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
array2.splice(0, 0, 0);
array2.splice(11, 0, 11);
console.log(array2);
array2.splice(0, 1);
array2.splice(10, 1);
console.log(array2);
array2.splice(2, 1, 99); //assuming "third element" is index 2
console.log(array2);
console.log(array2.length);
array2.splice((array2.length-15), 0, 55);
console.log(array2);
array2[1000] = 34;
console.log(array2);
console.log(array2.length);
console.log(array2[1001]);



//  const measurements = [12, 14, 16,,, 20, 22, 23,,,,,30,29,20,9];
// //  for (let i = 0; i <measurements.length; i++) {
// //     if measurements[i] === undefined
// //  }

// let sessionsCounter = 0;
// let sessionsLength = [];
// for (let i = 0; i <measurements.length; i++) {
//     if measurements[i] !== undefined;
//     sessionLenght++

// }
