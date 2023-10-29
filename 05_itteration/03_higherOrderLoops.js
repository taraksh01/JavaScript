// For of loop
const arr1 = [1, 2, 3, 4, 5, 6, 7];

// for (const i of arr1) {
//   console.log(i.toString());
// }

// for (const i in arr1) {
//   console.log(i);
// }

const greetings = "Hello, Tarak!";
// for (const greet of greetings) {
//   console.log(greet);
// }

// for (const greet in greetings) {
//   console.log(greetings[greet]);
// }

const map = new Map(); // map is not iterable
// map.set("name", "Tarak");
map.set("age", 25);
map.set("status", "single");
map.set("employed", false);
map.set("name", "rocket");

// console.log(map);

// for (const [key, value] of map) {
//   console.log(key, value);
// }

for (const [key, value] in map) {
  console.log(key, value);
}

const myObject = { name: "Tarak", age: 25, status: "single", disabled: false };
// for (const key in myObject) {
//   console.log(key);
// }

const arr2 = ["json", "js", "python", "ruby", "java"];

// arr2.forEach((item) => console.log(item));
