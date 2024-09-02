const accountID = 123466
let accountEmail = "yatin@Abc.com"
var accountPassword = "12345"
accountCity ="lunawada"
let accountstate;

// accountID = 2 // not allowed

accountEmail = "john@xyz.com"
accountPassword = "5896"
accountCity = "Ahemdabad"

console.log(accountID);

/* 
Prefer not to use var
Beacuse of issue in block scope and functional scope
*/

console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

console.table([accountID, accountEmail, accountPassword, accountCity, accountstate])







