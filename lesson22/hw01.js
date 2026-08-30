// //* ### 2
// a)
// Создай функцию-конструктор объектов Account(iban,owner, balance),
// которая возвращает объект с:
// - номер счета (iban)
// - именем владельца (owner)
// - балансом (balance)  
// методами:
// - **deposit**(amount) — пополнение счёта
// - **withdraw**(amount) — снятие денег (если хватает баланса)
// - **getBalance**() — вывод текущего баланса
 
// Создайте несколько объектов счетов. Создайте массив из
// счетов. Выведите информацию о всех счетах в консоль
 
// b) напишите функцию, transfer, которая получает два счета,
// и выполняет перевод между счетами вызывая методы deposit и
// withdraw соответственно.
 
// с) (чуть сложнее****************)
//  В качестве результата функции transaer, в случае успешной
// операции, должен cформироваться объект:
// - account1 (счет списания),
// - account2 (счет зачисления),
// - amount (сумма)
// - transactionInfo() (функция, которая выводит информацию о транзакции)  
 
// Если транзакция прошла неуспешно, объект должен содержать
// еще и поле error c информацией об ошибке. Естественно,
// transactionInfo() должна в этом случае выводить информацию
// о неуспешной транзакции. В случае, если транзакция успешна,
// поля error не должно быть.
 
 
function Account (iban, owner, balance) {
  this.iban = iban;
  this.owner = owner;
  this.balance = balance;
//   this.info = function () {
//     return `товар: ${this.name}; цена: ${this.price} описание: ${this.description}`;
//   };
this.deposit = function (amount) {
    this.balance += amount;
}
this.withdraw = function (amount) {
    if (this.balance - amount >= 0) {this.balance -= amount} else {return "balance insufficient"};
}
this.getBalance = function () {
    // console.log(this.balance);
    return this.balance;
    
}
}

const test1 = new Account ("IL54654654", "test user", 213213);
console.log(test1);


console.log(test1.withdraw(213214));

const test2 = new Account ("GE3513135", "test user2", 64351354);
const test3 = new Account ("ES3513135123", "test user12", -64351354);
const test4 = new Account ("GB3532513135", "test user132", 0);
const test5 = new Account ("DE3513135", "test user152", 123123);
const test6 = new Account ("IL151355434", "test user112", Math.PI);


const arr = [test1, test2, test3, test4, test5, test6];

console.log("accounts list printout");

// Array for storing compact transaction records
const transactions = [];


// Transfer function
function transfer(account1, account2, amount) {
  const transaction = {};

  transaction.account1 = account1;
  transaction.account2 = account2;
  transaction.amount = amount;

  if (account1.balance - amount >= 0) {
    account1.withdraw(amount);
    account2.deposit(amount);

    transaction.transactionInfo = function () {
      console.log(
        `Transfer successful from ${account1.iban} ` +
        `to ${account2.iban}: ${amount}`
      );
    };
  } else {
    transaction.error = "Insufficient funds";

    transaction.transactionInfo = function () {
      console.log(
        `Transfer failed from ${account1.iban} ` +
        `to ${account2.iban}: ${amount} - ${transaction.error}`
      );
    };
  }

  return transaction;
}


// Function for adding a compact transaction record to the array
function addTransaction(array, transaction) {
  const transactionRecord = {};

  transactionRecord.account1 = transaction.account1.iban;
  transactionRecord.account2 = transaction.account2.iban;
  transactionRecord.amount = transaction.amount;

  if (transaction.error) {
    transactionRecord.status = "Failed";
    transactionRecord.error = transaction.error;
  } else {
    transactionRecord.status = "Successful";
  }

  array.push(transactionRecord);
}


// Successful transfer test
const successfulTransaction = transfer(test1, test2, 100);

addTransaction(transactions, successfulTransaction);

console.log("========== Successful transaction test ==========");
successfulTransaction.transactionInfo();


// Failed transfer test
const failedTransaction = transfer(test1, test2, 1000000000);

addTransaction(transactions, failedTransaction);

console.log("========== Failed transaction test ==========");
failedTransaction.transactionInfo();


// Compact transaction history
console.log("========== Transactions array ==========");
console.log(transactions);
console.log("========== Failed transaction test ==========");
failedTransaction.transactionInfo();


// Checking the array
console.log("========== Transactions array ==========");
console.log(transactions[0].status);
console.log(transactions[1]);