const arr  = [1,2,3,4,55,67] // valid
const arr1 = ["dev", "alok", "brahma"] // valid
const arr2 = [1,34,56,"John", "Robert", 67] // valid

// Note: In JavaScript, arrays can hold values of different data types, including numbers, 
//strings, booleans, objects, and even other arrays.


// Indexing in Arrays start from zero
console.log(arr[0]); // 1
console.log(arr1[2]); // arr1[2] outputs "brahma", which is the third element of the arr1 array 
console.log(arr2[3]); // arr2[3] outputs "John", which is the fourth element of the arr2 array.

// Array indexing in JavaScript starts from 0. This means the first element of the array is 
//at index 0, the second element is at index 1, and so on. Here, arr[0] outputs 1, 
//which is the first element of the arr array.


  

// Imp Methods in array

arr.push(56) // add the element at the last of the array
console.log(arr); // [1, 2, 3, 4, 55, 67, 56]
// The push() method adds a new element to the end of an array and returns the new length
// of the array. In this case, 56 is added to the end of the arr array.



arr.pop() // remove last element from an array
console.log(arr); // [1, 2, 3, 4, 55, 67]

//The pop() method removes the last element from an array and returns that element.
// Here, it removes 56 from the arr array.

console.log(arr.includes(55)); // true
// The includes() method checks if an array contains a specific value and returns true or 
//false accordingly. In this case, it checks if the arr array includes 55, which it does, so it outputs true.

console.log(arr.indexOf(55)); // 4
//The indexOf() method returns the first index at which a given element can be found in the 
//array, or -1 if it is not present. Here, it finds the index of 55 in the arr array, which is 4.


const newArr = arr.join(); 
console.log(arr); //[ 1, 2, 3, 4, 55, 67 ]
console.log(newArr); // 1,2,3,4,55,67

console.log(typeof newArr); // string
//The join() method creates and returns a new string by concatenating all the elements in an array,
// separated by a specified separator string (if no separator is provided, a comma is used by default). Here, newArr is a string representation of the arr array elements, separated by commas.



console.log("arr before slice " , arr);
const arrN1 = arr.slice(1,3) 
console.log(arrN1);
console.log("arr after slice method used " , arr) ; // original array is not changed [ 1, 2, 3, 4, 55, 67 ]

//slice() includes the start index but excludes the end index
//slice() does not modify the original array, 





console.log("arr before splice method" , arr); // [ 1, 2, 3, 4, 55, 67 ]
const arrN2 = arr.splice(1,3);
console.log(arrN2); // [2,3,4] // splice method start from start index and includ last index
console.log("arr after splice method" , arr); //it deleted the splice element from the original array i.e [1,55,67]
//splice() includes both the start and end indices
// splice() modifies the original array by removing or replacing elements


// Difference between Slice and splice method
//1. slice() includes the start index but excludes the end index, while splice() includes both the start and end indices.
//2. slice() does not modify the original array, while splice() modifies the original array by removing or replacing elements.
//3. slice() returns a new array, while splice() returns an array containing the removed elements (if any).