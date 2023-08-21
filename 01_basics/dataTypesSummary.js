// Primitive

// Types 7: String, Number, Boolean, null, undefined, Symbol, BigInt

// Reference/Non-Primitive

// Array, Object, Function

const id = Symbol(782);
const anotherId = Symbol(782);

// console.log(id == anotherId);

// ++++++++++++++++++++++++++++++++++++++++++++++++
// Stack( Primitive ) || Heap( Non Primitive )

let firstName = "tarak";
let myFirstName = firstName;
console.log(firstName);
console.log(myFirstName);

let userOne = {
  firstName: "tarak",
  upi: "tarak@paytm",
};

let userTwo = userOne;

userTwo.upi = "someone@paytm";

console.log(userOne, userTwo);
