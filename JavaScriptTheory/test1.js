// Question-4

// const tuckIn = (a1, a2) => {
//     let a = [a1.shift()];
//     let b = [a1.pop()];
//     for (let i = 0; i < a2.length; i++) {
//       a1.push(a2[i]);
//     };
//       a1.push(b[0]);
//     for (let n = 0; n < a1.length; n++) {
//       a.push(a1[n]);
//     };
//     return a;
//   };
//   console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));
//   console.log(tuckIn([15,150], [45, 75, 35]));
//   console.log(tuckIn([[1, 2], [5, 6]], [[3, 4]]));

// one more way

// function tuckIn(arr1, arr2) {
	// arr2.push(arr1[1]);
//   arr2.unshift(arr1[0]);
//   return arr2;
// }
//   console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));
//   console.log(tuckIn([15,150], [45, 75, 35]));
//   console.log(tuckIn([[1, 2], [5, 6]], [[3, 4]]));

// Question - 5

// function countTrue(arr){
    // let count = 0;
// 
    // for(let i = 0; i < arr.length; i++){
        // if(arr[i] == true){
            // count++;
        // }
    // }
    // return count;
// }
// console.log(countTrue([true,false,false,true,false]));
// console.log(countTrue([false,false,false,false]));
// console.log(countTrue([]));

// Question - 3

// function binary(decimal) {
	// var str = ""
	// while(decimal > 1)
		// {
			// str = str.concat(decimal % 2)
			// decimal = parseInt(decimal / 2)
		// }
	// if(decimal == 1)
				// {
					// str = str.concat(1)
				// }
			// else
				// {
					// str = str.concat(0)
				// }
	// return str.split("").reverse().join("")
// }
// console.log(binary(1));
// console.log(binary(5));
// console.log(binary(10));

// Question - 2

// function addUp(num){
    // return num === 1 ? 1 : num + addUp(num - 1);
// }
// console.log(addUp(4));
// console.log(addUp(13));
// console.log(addUp(600));

// Question - 1

// const frames = (minutes, fps) => 60 * minutes * fps;
// console.log(frames(1, 1));
// console.log(frames(10, 1));
// console.log(frames(10, 25));

// Question - 6

// const num1 = 7;
// const num2 = 5;
// const multiples = (num1, num2) => {
//    const num = [];
//    for(let i = num1; i <= num1 * num2; i += num1){
    //   num.push(i);
//    };
//    return num;
// };
// console.log(multiples(7, 5));
// console.log(multiples(12, 10));
// console.log(multiples(17, 16));

// Question - 7

// function getLength(arr) {
	// let count = 0;
	// arr.forEach(item => {
		// if (Array.isArray(item)) {
			// count += getLength(item);
		// } else {
			// count++;
		// }
	// });
	// return count;
// }
// console.log(getLength([1,[2,3]]));
// console.log(getLength([1,[2,[3,4]]]));
// console.log(getLength([1,[2,[3,[4,[5,6]]]]]));

// Question - 9

// function missing(a, b) {
    // for (let i = 0; i < a.length; i++)
        // if (a[i] !== b[i])
            // return a[i];
// }
// console.log(missing([1,2,3,4,5,6,7,8],[1,3,4,5,6,7,8]));
// console.log(missing([true, true, false, false, true], [false, true, false, true]));

// Question - 8

// function numInStr(arr1){
    // let count=0;
    // let arr2=[];
    // for(let i = 0; i < arr1.length; i++){
        // let str = arr1[i];
        // for(let j = 0; j < str.length; j++){
            // if(str.charCodeAt(j) >= 48 && str.charCodeAt(j) <= 57){
                // arr2[count]=arr1[i];
                // count++;
                // break;
            // }
        // }
    // }
    // return arr2;
// }
// console.log(numInStr(["1a","a","2b","b"]));
// console.log(numInStr(["abc","abc10"]));