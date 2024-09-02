// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);


console.log(undefined > 1);

// ===

console.log("2" === 2);


/** the reason is that an equality check == and comparisions > <>=
 * <= work differently.
 * comparision convert null to a number, trating it as 0.
 * thats why (3) null >= 0 is true and (1) null > 0 is false.
 */






