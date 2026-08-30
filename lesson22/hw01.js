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

function printAccounts(accounts) {
  accounts.forEach(function (account, index) {
    console.log(`========== Account ${index + 1} ==========`);
    console.log(`IBAN: ${account.iban}`);
    console.log(`Owner: ${account.owner}`);
    console.log(`Balance: ${account.getBalance()}`);
  });
}

printAccounts(arr);


function transfer (account1, account2, amount) {
    if (from.balance - amount >= 0) {
        from.withdraw(amount);
        to.deposit(amount);
        return {
            transactionInfo: function() {
                // have a feeling that we do not need both console.log and return, but the task is not clear about it
                console.log(`Transfer successful from ${this.account1.iban} to ${this.account2.iban}: ${this.amount}`);
                return `Transfer successful from ${this.account1.iban} to ${this.account2.iban}: ${this.amount}`;
            }
        };
    } else {
        return {
            error: "Insufficient funds",
            transactionInfo: function() {
                // have a feeling that we do not need both console.log and return, but the task is not clear about it
                console.log(`Transfer failed from ${this.account1.iban} to ${this.account2.iban}: ${this.amount} - ${this.error}`);
                return `Transfer failed from ${this.account1.iban} to ${this.account2.iban}: ${this.amount} - ${this.error}`;
            }
        };
    }
}
// test insufficient balance
const result = transfer(test1, test2, 213214);
console.log("============testing insufficient balance full output===========");
console.log(result);
console.log("============testing insufficient balance transactionInfo===========");
console.log(result.transactionInfo());

// test successful transfer
const result2 = transfer(test2, test1, 213214);
console.log("==============testing successful transfer full output===========");
console.log(result2);
console.log("==============testing successful transfer transactionInfo===========");
console.log(result2.transactionInfo());