// let firstName = `Himanshu`;
// let lastName = "Malik";
// console.log(firstName + " " + lastName);

// this is called backtick, easy way to use.
// let fullName = `${firstName} ${lastName}`;
// console.log(fullName);

// String Methods

// length of string
// let str = "Bhavesh Bansal";
// console.log(str.length);

// slice -- 
// let str = "Bhavesh Bansal";
// console.log(str.slice(2, 5));
// console.log(str.slice(-13, 5)); // in slice we can use -ve value as well

// let str = "Bhavesh Bansal";
// console.log(str.substring(2, 5));
// console.log(str.substring(-12, 5));

// trim method
// let str = "                    Bhavesh Bansal                    ";
// console.log(str.length);
// console.log(str.trim().length);

// Replace method
// let str = "Bhavesh Bansal";
// console.log(str.replace("Bhavesh", "Malik")); // output - Malik Bansal

// Print uppercase and lower letter
// let str = "Bhavesh Bansal";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

let str = "Bhavesh";
console.log(str.charAt(1)); // gives the charcter
console.log(str.charCodeAt(0)); // gives the charcter ASCII value

str[0] = "A"; // Strings are immutable
console.log(str);