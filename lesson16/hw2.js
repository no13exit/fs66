let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //assuming "В файле 2 повторите пункты 1-5, но используйте методы массива splice и length соответственно." can be done here as well with another array
array2.splice(0, 0, 0);
array2.splice(11, 0, 11);
console.log(array2);
array2.splice(0, 1);
array2.splice(10, 1);
console.log(array2);
array2.splice(2, 1, 99); //assuming "third element" is index 2
console.log(array2);
console.log(array2.length);
