// let num1 = 10;
// const num2 = 29;
// var num3 = 28;

if (true) {
  let num1 = 10;
  const num2 = 29;
  var num3 = 28;
}

// console.log(num1);
// console.log(num2);
// console.log(num3);

function one() {
  let name = "tarak";
  function two() {
    let platform = "github";
    console.log(name);
  }
  two();
  // console.log(platform);
}

// one();
console.log(addOne(8));
function addOne(num) {
  return num + 1;
}

console.log(addTwo(78));
const addTwo = function (num) {
  return num + 2;
};
