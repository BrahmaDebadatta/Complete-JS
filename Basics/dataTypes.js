/*
There are majorly 8 Data types present in JS
1.Numbers   => used to store Numeric Values between -(2 to the power 53-1) and (2 to the power 53-1)
2.Bigint    => used to store numeric value Greater than or less than (2 to the power 53-1) and-(2 to the power 53-1)    
3.String    => used to store String Value
4.Boolean   => Either True or False
5.Undefined => The value is unknown to us or we do not the value
6.Null      => We know that it has some value and the value is null or no value is there
7.Symbol    => used to store unique value
8.Object    => Used to store collection of data

*/

let age = 23; //number
let name = "Debadatta"; // string
let isDeveloper = true; // boolean
let address; // undefined
let bankBalance = null; 
// remember the typeof null in Js is "Object" i.e here the data type of bankBalance is object
                            

console.table([typeof(age), typeof(name),typeof(isDeveloper),typeof(address),typeof(bankBalance)]);