// let person = {
//     "name" : "Bhavesh",
//     age: 23,
//     0: "hello"
// }
// console.log(person.name);
// console.log(person.age);
// console.log(person[0]);

// console.log(Array.prototype);
// console.log(Array.prototype.map);

String.prototype.len = function(){
    console.log(this.length);
}

let name = "Bhavesh bansal";
name.len();