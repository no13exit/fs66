let number = 12211221;

let sum1 = 0;
let sum2 = 0;
let counter = 1;

while (number > 0) {
  let digit = number % 10;

  if (counter % 2 !== 0) {
    sum1 += digit;
  } else {
    sum2 += digit;
  }

  number = Math.trunc(number / 10);
  counter++;
}




// console.log(sum1);
// console.log(sum2);
if (sum1 === sum2) {
  console.log("Число счастливое");
} else if (sum1 !== sum2) {
  console.log("Число несчастливое");
}


console.log(90071992547409192===90071992547409190); 
console.log(Number.MAX_SAFE_INTEGER);




//works, but not for BigInt numbers as i found during tests. below is BigInt code with duplicated variables 

let number2 = 1210n; //расширяем условие, чтобы корректно работало на 0 - повод сделать через do while

// console.log(1+3+5+7+9+8+6+4+2);
// console.log(2+4+6+8+9+7+5+3+1);

let sum3 = 0n;
let sum4 = 0n;
let counter2 = 1n;

do {
  let digit = number2 % 10n;

  if (counter2 % 2n !== 0n) {
    sum3 += digit;
  } else {
    sum4 += digit;
  }

  number2 = number2 / 10n;
  counter2++;
} while (number2 > 0n);
// тернарник для разнообразия
console.log(sum3 === sum4 ? "Число счастливое" : "Число несчастливое");
