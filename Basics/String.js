let Fname = "debadatta" // Assigning the first name to the variable Fname
let Lname = " brahma"   // Assigning the last name to the variable Lname with a leading space


let result = (Fname + Lname ) // Concatenating the first name and last name variables
console.log(result);          // O/P debadatta Brahma

 // Concatenating Fname, Lname, and the string " lives in India" and storing in aotherResult
let aotherResult = (Fname + Lname + " lives in India") 
console.log(aotherResult); //  O/P  debadatta brahma lives in India

// Using template literals to embed variables directly within a string
console.log(`my firstname is ${Fname}  lastname is ${Lname } and is live in India `);
// Output: my firstname is debadatta lastname is  brahma  and is live in India


//Notes
// 1. In the first two examples, we're using the + operator to concatenate strings and variables.
// 2. In the third example, we're using template literals (enclosed within backticks ``).
//    Template literals allow us to embed expressions (variables or other code) within the string
//    by using the ${expression} syntax.
// 3. Template literals provide a more readable way to concatenate strings and variables,
//    especially when dealing with multiline strings or complex expressions.
// 4. The spaces around the variables in the template literal will be preserved in the output.

let carName = new String("Maruti Alto")
console.log(carName)
// when we use new keyword to declare a string then it store the value in key and value format
// like here in Maruti Alto the Key value is the index num and value is the char at that index number
// [0 : M]
// [1 : a]
// [2: r] and so on...
console.log(carName[0]);
console.log(carName[1]);
console.log(carName[2]);
console.log(carName[3]);
console.log(carName[4]);

//console.log(carName.toUpperCase()); // O/P will be MARUTI ALTO
//console.log(carName.charAt(2)); // display the charter at index no 2 i.e r, indexing alway startfrom 0

let newcar = carName.substring(0,5)  // 0 is the start index num and 5 is the end index no
//console.log(newcar); // op will be Marut bcz it exclude the last index no

// if you add -ve value to substring it ignore the value and start it from 0
let newcarForNegSubStr = carName.substring(-8,5) 
//console.log(newcarForNegSubStr);// OP will be Marut

// Slice method in string will take the negative value
let newCarForSlice = carName.slice(-6,9) 
console.log(newCarForSlice) // Maruti Alto



