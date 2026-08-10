// раз у нас в тз задано, что число состоит строго их шести цифр - используем логику с math.trunc и можем позволить себе разбить число примитивным методом деления на тыщу

let number = 123321;
let sum1 = 0;
let sum2 = 0;
let left = Math.trunc(number / 1000);
// console.log(number2);
let right = number % 1000;
// console.log(number3);
while (left > 0) {
  let digit = left % 10;
  sum1 += digit;
  left = Math.trunc(left / 10);
}

while (right > 0) {
  let digit = right % 10;
  sum2 += digit;
  right = Math.trunc(right / 10);
}

// console.log(sum2, sum3);

if (sum1 === sum2) {
  console.log("Число счастливое");
} else {
  console.log("Число несчастливое");
}



// строго говоря, цикл тут не нужен вообще

let number2 = 123321;

let left1 = Math.trunc(number2 / 1000);  
let right1 = number2 % 1000;             

let sum3 = Math.trunc(left1 / 100) + Math.trunc((left1 % 100) / 10) + (left1 % 10);

let sum4 = Math.trunc(right1 / 100) + Math.trunc((right1 % 100) / 10) + (right1 % 10);

console.log(sum3 === sum4 ? "Число счастливое" : "Число несчастливое");

