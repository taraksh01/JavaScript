const user = {
  name: "tarak",
  age: 23,
  welcome: function () {
    // console.log(`${this.name}, welcome to our website`);
    console.log(this);
  },
};

// user.welcome();
// user.name = "Tarak";
// user.welcome();

// console.log(this);

// function one() {
//   console.log(this);
// }

const one = () => {
  console.log(this);
};

one();
