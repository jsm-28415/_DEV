const fs = require("fs");

// console.log(fs.readFileSync("a.txt", "utf-8")); // This is synchronus method

// Existence Check
// console.log(fs.existsSync("a.txt"));
// console.log(fs.existsSync("b.txt"));
// 
// fs.writeFileSync("a.txt", "How are you"); // delete the all data, and over write new data.
// fs.writeFileSync("b.txt", "This file does not exist we just created");
// console.log(fs.readFileSync("b.txt", "utf-8"))

// By using below line we can input arguments in terminal
// console.log(process.argv);

// fs.writeFileSync("a.txt", "How are you");  
// fs.writeFileSync("b.txt", "This file does not exist we just created");

let file1name = process.argv[2];
let file2name = process.argv[4];

let file1data = fs.readFileSync(file1name, "utf-8");
let file2data = fs.readFileSync(file2name, "utf-8");
console.log(file1data + "\n" + file2data)

// Enter this line to execute output - node .\fs.js a.txt -a b.txt