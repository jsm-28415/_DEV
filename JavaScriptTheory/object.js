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

// String.prototype.len = function(){
    // console.log(this.length);
// }
// 
// let name = "Bhavesh bansal";
// name.len();

let obj = {
    1 : "hello1",
    2 : "hello2"
}

// console.log(Object.keys(obj));
// console.log(Object.values(obj));

// Ways to iterate

for(let key in obj){
    console.log(obj[key]);
}

for(let i = 0; i < Object.keys(obj); i++){
    console.log(obj[Object.keys(obj)[i]])
}