const accountId = 144553
let accountEmail = "ineverydomain@gmail.com"
var accountPassword = "12345678"
accountCity = "Delhi"
let accountState;

/*
Prefer not to use var . as there is no function scope for vas.
*/

accountEmail = "a@12"
accountPassword = "1234"
accountCity = "Mumbai"
// accountId = 2 // not alllowed
console.log(accountId);
console.table([accountEmail,accountId,accountPassword,accountCity, accountState]);