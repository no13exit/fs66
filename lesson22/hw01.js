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


function printAccounts(accounts) {
  accounts.forEach(function (account, index) {
    console.log(`========== Account ${index + 1} ==========`);
    console.log(`IBAN: ${account.iban}`);
    console.log(`Owner: ${account.owner}`);
    console.log(`Balance: ${account.getBalance()}`);
  });
}

printAccounts(arr);

// Array for storing compact transaction records
const transactions = [];


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

  transactions.push(transaction);

  return transaction;
}

const successfulTransaction = transfer(test1, test2, 100);

console.log("========== Successful transaction ==========");
successfulTransaction.transactionInfo();

const failedTransaction = transfer(test1, test2, 1000000000);

console.log("========== Failed transaction ==========");
failedTransaction.transactionInfo();

console.log("========== Transactions history ==========");

transactions.forEach(function (transaction, index) {
  console.log(`Transaction ${index + 1}`);
  transaction.transactionInfo();
});

transactions[0].transactionInfo();
transactions[1].transactionInfo();

console.log(transactions[0].amount);
console.log(transactions[1].error);