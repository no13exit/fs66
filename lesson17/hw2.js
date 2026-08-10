// раз у нас в тз задано, что число состоит строго их шести цифр - используем логику с math.trunc и можем позволить себе разбить число примитивным методом деления на тыщу

let number = 123322;
let sum2 = 0;
let sum3 = 0;
let number2 = Math.trunc(number / 1000);
// console.log(number2);
let number3 = number % 1000;
// console.log(number3);
while (number2 > 0) {
  let digit = number2 % 10;
  sum2 += digit;
  number2 = Math.trunc(number2 / 10);
}

while (number3 > 0) {
  let digit = number3 % 10;
  sum3 += digit;
  number3 = Math.trunc(number3 / 10);
}

// console.log(sum2, sum3);

if (sum2 === sum3) {
  console.log("Число счастливое");
} else {
  console.log("Число несчастливое");
}



// строго говоря, цикл тут не нужен вообще

let number2 = 123322;

let left = Math.trunc(number2 / 1000);  
let right = number2 % 1000;             

let sum2 = Math.trunc(left / 100) + Math.trunc((left % 100) / 10) + (left % 10);

let sum3 = Math.trunc(right / 100) + Math.trunc((right % 100) / 10) + (right % 10);

console.log(sum2 === sum3 ? "Число счастливое" : "Число несчастливое");

