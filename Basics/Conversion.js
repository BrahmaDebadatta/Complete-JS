let age = 23
console.log(typeof age)

//Suppose someone has Written
let age_1 = "18"
console.log(typeof age_1)//string Type

//  convert the age into number 
let Convert_age_1 = Number(age_1)
console.log(typeof Convert_age_1)// converted to number type

let age_2 = "18abc"
let Convert_age_2 = Number(age_2)
console.log(typeof Convert_age_2)// converted to number type
console.log(Convert_age_2);// but here when we converted "18abc" to number it is converted But the o/p will be NaN i.e not a number
