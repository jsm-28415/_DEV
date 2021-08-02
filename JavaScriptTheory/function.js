// Way to create a function
// function add (a, b) {
    // return parseInt(a) + parseInt(b); // why we return in parseInt beacuse by mistake 
// }                                     // if we write in string it will convert it into integer
// 
// console.log(add(1, 2));
// console.log(add("1", 2));

// This is validation in javascript
// function add (a, b) {
    // if(typeof(a) != "number" || typeof(b) != "number"){
        // return "Invalid argument"
    // }
    // return a + b;
// }
// console.log(add("1", 2));
// console.log(add(1, 2));

// function add (a, b) {
    // if(isNaN(a) || isNaN(b)){
        // return "Invalid argument"
    // }
    // return a + b;
// }
// console.log(add("1", 2));
// console.log(add(1, 2));

// Another way to create function
// let add = function(a, b){
    // return parseInt(a) + parseInt(b);
// }
// console.log(add("1", 2));
// console.log(add(1, 2));

// And another way to create function
// let add = (a, b) => {
    // return parseInt(a) + parseInt(b);
// }
// console.log(add("1", 2));
// console.log(add(1, 2));

print();
function print() {
    console.log("hello");
}

let print = function(){
    console.log("hello");
}