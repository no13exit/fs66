// 1.Создайте массив на 10 строк.

// 2.Создайте функцию comparator(a,b), которая  принимает 2 строки  и 
// возвращает 1 - если первое строка длиннее, -1 если вторая строка длиннее, 
// 0 если равны.  
// Используйте синтаксис function declaration, вызовите эту фкнкцию и 
// напечатайте результат.
// Напишите эту эе функцию используя Function Expression и Arrow Function  

// 3.Напишите функцию, которая принимает массив и функуию-компаратор, 
// и возвращает самое большое значение в массиве. Вызовите эту функцию, передав 
// ей массив строк, полученный в первой задаче и функцию, написанную во второй задаче.


const lines = [
  "Один",
  "Двадцать",
  "Триста",
  "Четыреста",
  "Пятьдесят",
  "Шесть",
  "Семьсот",
  "Восемьдесят",
  "Девяносто",
  "Тысяча"
];

function comparatorDeclaration(a, b) {
  if (a.length > b.length) return 1;
  if (b.length > a.length) return -1;
  return 0;
}

const comparatorArrow = (a, b) => {
  if (a.length > b.length) return 1;
  if (b.length > a.length) return -1;
  return 0;
};

const comparatorExpression = function(a, b) {
  if (a.length > b.length) return 1;
  if (b.length > a.length) return -1;
  return 0;
};


const sortedByDeclaration = [...lines].sort(comparatorDeclaration);
console.log("==============================")
console.log(sortedByDeclaration[sortedByDeclaration.length-1]);




const sortedByExpression = [...lines].sort(comparatorExpression);
console.log(sortedByExpression[sortedByExpression.length-1]);


const sortedByArrow = [...lines].sort(comparatorArrow);
console.log(sortedByArrow[sortedByArrow.length-1]);


function findMaximum(array, compareFunc) {
  let maxElement = array[0];

  for (let i = 1; i < array.length; i++) {
    if (compareFunc(maxElement, array[i]) === -1) {
      maxElement = array[i];
    }
  }

  return maxElement;
}

const result1 = findMaximum(lines, comparatorDeclaration);
const result2 = findMaximum(lines, comparatorExpression);
const result3 = findMaximum(lines, comparatorArrow);

console.log("\nСамое большое значение в массиве:");
console.log("С Function Declaration:", result1); 
console.log("С Function Expression:", result2);  
console.log("С Arrow Function:", result3);       