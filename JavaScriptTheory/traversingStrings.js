// Printing it through loop
// let str = "Bhavesh Bansal";
// let ans = " ";
// for(let i = 0; i < str.length; i++){
    // console.log(str[i]); // print in new line 
    // ans += str[i] + ", "; // Print in one line by doing this
// }
// console.log(ans);

// Print character ASCII value
// let str = "Himanshu Malik";
// for(let i = 0; i < str.length; i++){
    // console.log(str.charCodeAt(i));
// }

// count b occuerence
// let str = "jbhghfhbdzhshdvhsdhvhzvhbhbhb";
// let count = 0;
// for(let i = 0; i < str.length; i++){
    // if("b" == str[i]){
        // count++;
    // }
// }
// console.log(count);

// add the complete string by coverting it into integer
// let str = "12379655463122";
// let ans = 0;
// for(let i = 0; i < str.length; i++){
    // ans += parseInt(str[i]);
// }
// console.log(ans);

// add the ascii with integer
// let str = "1A2";
// let ans = 0;
// for(let i = 0; i < str.length; i++){ // NaN = Not a Number
    // if(str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57){ // in this if condition we can use this as well -> !isNaN(str[i])
    //   ans += parseInt(str[i]);;
    // }
    // else{
        // ans += parseInt(str.charCodeAt(i));
    // }
// }
// console.log(ans);

//Reverse the string
// let str = "Bhavesh Bansal";
// let ans = "";
// for(let i = str.length - 1; i >= 0; i--){
    // ans += str[i];
// }
// console.log(ans);

// Reverse by charcter
// 1- way
// let str = "Bhavesh Bansal";
// let newStr = str.split('');
// console.log(newStr.reverse());

// 2- way
let str = "Bhavesh Bansal";
let revstr = "";
for(let i = str.length - 1; i >= 0; i--){
    revstr += str[i];
}
let sp;
let ep = revstr.length;
let ans = "";
for(let i = revstr.length - 1; i >= 0; i--){
    if(revstr[i] == " "){
        sp = i + 1;
        ans += revstr.substring(sp, ep) + " ";
        ep = i;
        sp = undefined;
    }
    else if(i == 0){
        sp = 0;
        ans += revstr.substring(sp, ep);
    }
}
console.log(ans);