let id = Symbol("Hadi");

console.log(id);
alert(id.toString()); // prints "Symbol(Hadi)"
alert(id.description); // prints "Hadi"


// Usage of Symbol in Function Expression
let id1 = Symbol("yourName");

let user = {
    fName : "John",
    [id1] : "Hadi"
}
console.log(user); // prints { fName: "John", Symbol(yourName): "Hadi" }

let greeting = Symbol("Hi");

let user1 = {
    fName : "John",
    [id1.description] : "Hadi"
}
user1[greeting] = "Hello";
console.log(user1[greeting]); // prints "Hello"
console.log(user1); // prints { fName: "John", yourName: "Hadi" }



let userObj = {
    "firstName": "Taqi",
}
let user2 = Symbol("lastName");
userObj[user2] = "Raza" 

for (let key in userObj) {
    console.log(key); // Skips Symbol("lastName")
}
// -------------- JSON.Stringify skips Symbols -------------- //
console.log(userObj); // prints { firstName: "Taqi", lastName: "Raza" });
console.log(JSON.stringify(userObj)); // prints '{"firstName":"Taqi"}    // Skips Symbol("lastName")


