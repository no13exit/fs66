// no objects
let userName='John Doe';
let userAge=30;
let userIsStudent=true;

console.log('User Name: ' + userName);
console.log('User Age: ' + userAge);
console.log('Is User a Student? ' + userIsStudent);     

// with objects
let user = {
    name: 'John Doe',
    age: 30,
    isStudent: true
}
console.log('User Name: ' + user.name);
console.log('User Age: ' + user.age);
console.log('Is User a Student? ' + user.isStudent);    
console.log(user);

user.name = 'Jane Smith';
console.log(user)
user.email='jane.smith@example.com';
console.log(user);
delete user.isStudent;
console.log(user);
const user1 = {
    name: 'Alice Johnson',
    age: 25,
    isStudent: false
}
console.log(user1);
user1.age = 26;
console.log(user1);
user1.email = 'alice.johnson@example.com';
console.log(user1);
console.log(typeof user1.age);