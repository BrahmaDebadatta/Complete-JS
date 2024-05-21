const UserDetails = {
    name: "Debadatta",
    "full name" : "debadatta brahma",
    age : 22,
    "country" : "india",
    Dob: "04-02-2000",
    
}

// How to access the object
console.log(UserDetails.name); // One way to access the object
console.log(UserDetails["name"]);// another way to access the object
console.log(UserDetails.country);
console.log(UserDetails["full name"]);


// when we create objects , internally it hold the data in key value pair
// in Userdetails objects, name is key and the value is "Debadatta"
// to access the object value we have to ways
// 1. console.log(UserDetails.name); 2. console.log(UserDetails["name"]);
// In case i declare the key in multi words then we should warp the key inside "" other wise it 
// show error , hence in UserDetails to store the first name we need to wrap it inside "" i.e "first name"
// to access the multi word keys we only have one way i.e UserDetails["last Name"]
// if we try to access by writing UserDetails.last Name it will show error. 


// if we want to make any changes in our key value then we can do it by writing below code

UserDetails.name = "brahma" 
console.log(UserDetails.name);// it has changed from "debadatta" to "brahma"

// suppose we want that no one can manupulate the object then we can use
Object.freeze(UserDetails);

UserDetails.country = "USA"
console.log(UserDetails.country); // India , the O/P remain unchanged even after i changed it to USA

// if we want to access any value which we we have not declared inside the object then it will show
// undefined

console.log(UserDetails["last Name"]);//undefined
