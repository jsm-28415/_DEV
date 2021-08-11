const fs = require("fs");
let arguments = process.argv.slice(2);
// console.log(arguments);

let flag = [];
let filenames = [];

for(let i of arguments){
    if(i[0] == "-"){
        flag.push(i);
    }
    else{
        filenames.push(i);
    }
}

if(flag.length == 0 && filenames.length != 0){
    for(let file of filenames){
        console.log(fs.readFileSync(file, "utf-8"));
    }
}