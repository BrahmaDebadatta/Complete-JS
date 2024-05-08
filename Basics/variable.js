const userId = 29293 // Can not the value of the Variable
let userName = "Debadatta"
var email = "debadatta@gmail.com"
let phoneNumber; // The Value will be Undefined when we print the PhoneNumber in Console



console.log(userId);   // Printing the Variable one by one
console.log(userName);
console.log(email);

console.table([userId,userName,email,phoneNumber]); // by using console.table([]) we can print more than one variable

/*
It is Recommended to use const and let key words while declaring a Variable as var has a issue in 
block Scope and Funtional Scope
*/