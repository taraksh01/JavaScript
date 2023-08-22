function addTwoNumbers(a, b) {
  return a + b;
}

// console.log(addTwoNumbers(3, 4));
function greetings(username = "new user") {
  return `Welcome ${username}`;
}

// console.log(greetings());
// console.log(greetings("tarak"));

function calculateCartPrice(...nums) {
  return nums;
}

console.log(calculateCartPrice(10, 219.2, 278, 218));
