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

// Question - 2

// function addUp(num){
    // return num === 1 ? 1 : num + addUp(num - 1);
// }

// Question - 1

// const frames = (minutes, fps) => 60 * minutes * fps;

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
// console.log(multiples(num1, num2));

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

// Question - 8