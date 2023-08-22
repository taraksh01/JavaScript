// Singleton
// Object.create()

// Object Literal

const mySym = Symbol("key");

const myObj = {
  name: "tarak",
  "full name": "tarak shaw", // When we want multiple words in key
  [mySym]: "key1", // When we want to use Symbol as key
  isDeveloper: true,
  location: "Kolkata",
  email: "tarak@gmail.com",
  lastLoggedIn: ["Tuesday"],
};

// console.log(myObj);
// console.log(myObj.name);
// console.log(myObj["full name"]);
// console.log(myObj[mySym]);

// Object.freeze(myObj);
// myObj.name = "Tarak";
// console.log(myObj);

// myObj.greeting = function () {
//   console.log(`hello ${this.name}`);
// };

// console.log(myObj.greeting);
// console.log(myObj.greeting());

// const obj1 = { 1: "a", 2: "b" };
// const obj2 = { 3: "c", 4: "d" };

// const obj3 = { obj1, obj2 };
// const obj4 = Object.assign({}, obj1, obj2);
// const obj5 = { ...obj1, ...obj2 };
// console.log(obj3);
// console.log(obj4);
// console.log(obj5);


// console.log(Object.keys(myObj));
// console.log(Object.values(myObj));
// console.log(Object.entries(myObj));