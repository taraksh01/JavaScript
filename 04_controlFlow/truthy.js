const userEmail = "tarak@tarak.ai";
if (userEmail) {
  console.log("Looging in user " + userEmail);
} else {
  console.log("Please enter a user email");
}

// Falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Everything else is truthy values

// const emptyArray = [];
// if (emptyArray.length === 0) {
//   console.log("Array is empty");
// }

// const emptyObject = {};
// if (Object.keys(emptyObject).length === 0) {
//   console.log("Object is empty");
// }

// console.log(false == 0);
// console.log(true == 0);

// Nullish coalescing operator
let val;
val = 6 ?? 2;
val = null ?? 3;
val = undefined ?? 4;
console.log(val);
