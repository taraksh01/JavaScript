const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async promise complete");
    resolve();
  }, 1000);
});

promiseOne.then(() => console.log("Async promise consumed successfully"));

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async promise 2 complete");
    resolve();
  }, 1000);
}).then(() => console.log("Async promise 2 consumed successfully"));

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ userName: "Testuser 1", email: "Testuser1@testuser.com" });
  }, 1000);
});

promiseThree.then((user) => console.log(user));

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ userName: "Testuser 2", email: "Testuser2@testuser.com" });
    } else {
      reject("Error: something went wrong");
    }
  }, 2000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.userName;
  })
  .then((userName) => {
    console.log("User name: " + userName);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Promise has either been resolved or rejected");
  });

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({
        userName: "TestUser 3",
        email: "test3@example.com",
        password: "1234",
      });
    } else {
      reject("Error: something went wrong");
    }
  }, 3000);
});

const consumePromiseFive = async () => {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

consumePromiseFive();

const getAllUsers = async () => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const allUsers = await response.json();
    console.log(allUsers);
  } catch (err) {
    console.log(err);
  }
};

getAllUsers();
