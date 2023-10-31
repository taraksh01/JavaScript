const user = {
  username: "user",
  loggedIn: false,
  lastLoggedIn: "23-minutes ago",

  getUsserDetails: () => {
    console.log(`got user ${this.username}`);
  },
};

console.log(user.getUsserDetails());

// Constructor function
const User = function (username, loggedIn, lastLoggedIn) {
  this.username = username;
  this.loggedIn = loggedIn;
  this.lastLoggedIn = lastLoggedIn;

  this.greetings = () => {
    console.log(`${this.username} welcome`);
  };
  // return this; // by default return this instance
};

const userOne = new User("userOne", false, "2-minutes ago");
const userTwo = new User("userTwo", true, "20-minutes ago");
console.log(userOne);
console.log(userTwo);
