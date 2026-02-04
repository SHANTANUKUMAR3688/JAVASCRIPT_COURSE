// let arr=[1,2,3,4,5,6,7,8,9,10]

// let start=0;
// let end=arr.length-1;
// let target=5;

// while(start<=end){
//     let mid = Math.floor((start + end) / 2);
//     if(arr[mid]===target){
//         console.log(`Element found at index: ${mid} with value: ${arr[mid]}`);
//         break;
//     } else if(arr[mid]<target){
//         start=mid+1;
//     } else {
//         end=mid-1;
//     }
// }

// let pattern = "";
// for(let i=1; i<=5; i++){
//     for(let j=1; j<=i; j++){
//         pattern += "*";
//     }
//     pattern += "\n";  // move to next line after inner loop
// }
// console.log(pattern);


// let arr2 = [2, 1, 5, 1, 3, 2];
// let k=3;

// let maxsum=0;
// let windowsum=0;
// for(let i=0;i<3;i++){
//     windowsum += arr2[i]
// }
// maxsum = windowsum;
// for(let i=k; i<arr2.length; i++){
//     windowsum += arr2[i] - arr2[i-k];
//     maxsum = Math.max(maxsum, windowsum);
// }
// console.log(`Maximum sum of subarray of size ${k} is: ${maxsum}`);


// let output=(function(X){
//     delete X;
//     return X;
// })
// console.log(output);