let Fname = "debadatta" // Assigning the first name to the variable Fname
let Lname = " brahma" // Assigning the last name to the variable Lname with a leading space


let result = (Fname + Lname ) // Concatenating the first name and last name variables
console.log(result); // O/P debadatta Brahma

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