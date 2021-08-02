// Array creation -> In JS array is dynamic

// let arr = [];
// let arr = new Array();
// console.log(arr);

// let arr = ["bhavesh", 23, 45.4, true, 'b'];
// 
// arr.push("hello");
// console.log(arr);
// arr.pop();
// console.log(arr);
// console.log(arr.length);

// let str1 = "Bhavesh";
// let str2 = "Bhavesh Bansal";
// let str3 = "apple, mango, banana";
// split convert string into array; 
// console.log(str1.split(""));
// console.log(str2.split(""));
// console.log(str3.split(","));

// let arr = ["a", "b", "c", "d"];
// join covert array into string;
// console.log(arr.join(""));
// console.log(arr.join("#"));
// console.log(arr.join("|"));

// let arr1 = ["a", "b", "c", "d"];
// let arr2 = ["e", "f", "g", "h"];
// 
// console.log(arr1.concat(arr2));

//Normal way to print
// let arr = [1,2,3,4,5,6];
// for(let i = 0; i < arr.length; i++){
    // console.log(arr[i]);
// }

//print i -> in = traverse and gives indexes
// let arr = [8,9,7,6,5];
// for(let i in arr){
    // console.log(i);
// }

// print i -> of = traverse and gives value
// let arr = [8,9,7,6,5];
// for(let i of arr){
    // console.log(i);
// }

// console.log("a" + 1 + 2); // String concatenatiom

// console.log(1 + 2 + "a"); // first integer addition then string concatenation

// console.log(String.fromCharCode("a".charCodeAt(0) + 1));

// const arr = [1,2,3,4,5];
// arr[3] = 8; // Reassignation allowed
// arr = [1,2,3]; // redifining not allowed
// console.log(arr);

// let arr = ["a", "b", "c", "d", "e"];
// for each is a method we use, and we put argument in that.
// arr.forEach(function(value, index, array){
    // console.log(value, index, array);
// })

// let arr = ["a", "b", "c", "d", "e"];
// function temp(myarg, myarg2, myarg3, data){
    // console.log(myarg, myarg2, myarg3, data);
// }
// arr.forEach(temp.bind(this, "hello", "hello2", "hello3"));

function myForEach(array, callBackFn){
    for(let i = 0; i < array.length; i++){
        callBackFn(array[i], i, array);
    }
}

let arr = [1,2,3,4];
myForEach(arr,function(value, index, array){
    console.log(value, index, array);
})