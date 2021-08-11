const fs = require("fs");
let arguments = process.argv.slice(2);
// console.log(arguments);

let flags = [];
let filenames = [];

for(let i of arguments){
    if(i[0] == "-"){
        flags.push(i);
    }
    else{
        filenames.push(i);
    }
}

// if(flag.length == 0 && filenames.length != 0){
    // for(let file of filenames){
        // console.log(fs.readFileSync(file, "utf-8"));
    // }
// } // to print this use this cmd - node .\index.js a.txt b.txt

if(flags.length == 0){
    for(let file of filenames){
        console.log(fs.readFileSync(file, "utf-8"));
    }
}
else{
    for(let flag of flags){
        if(flag == "-rs"){
            for(let file of filenames){
                let flieData = fs.readFileSync(file, "utf-8");
                // for(let i of flieData){
                    // console.log(i);
                // }

                // this code is to split the spaces and put in the array
                // let fileDataArray = flieData.split(" ");
                // console.log(fileDataArray); // To print this use this - node .\index.js -rs a.txt

                // this code is to join the split spaces back without spaces
                let fileDataArray = flieData.split(" ").join("");
                console.log(fileDataArray);
            }
        }
    }
}

for(let file of filenames){
    
}