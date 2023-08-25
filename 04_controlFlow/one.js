let isLoggedIn = true;
if (isLoggedIn) {
  // Execute if logged in is true
  console.log("true");
} else {
  // Execute if logged in is false
  console.log("false");
}

// let ballance = 1000;
// if (ballance <= 500) {
//   console.log("less than 500");
// } else if (ballance < 600) {
//   console.log("less than 600");
// } else if (ballance < 800) {
//   console.log("less than 800");
// } else {
//   console.log("more than 800");
// }

let debitCard = true;
if (debitCard && isLoggedIn) {
  console.log("purchase");
} else {
  console.log("not authorized");
}
