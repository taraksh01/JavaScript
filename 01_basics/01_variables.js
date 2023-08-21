const accountID = 8263983;
let accountEmail = "fake@mail.com";
var accountPassword = "123tarak";
accountCity = "Kolkata";
let accountState;

console.log(accountID);

/*
Prefer not to use var
because of the issue in block scope and functional scope
*/
console.table([
  accountID,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
