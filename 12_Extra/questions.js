//const a="shantanu";
//const b="kumar";

// function conc(a,b){
//     let min=Math.min(a.length,b.length);
//     let result="";
//     for(let i=0;i<min;i++){
//         result+=a[i]+b[i];
//     }
//     return result+a.slice(min)+b.slice(min);
// }
// console.log(conc(a,b))

// function swap(a,b){
//     // [a,b]=[b,a]
//     // return [a,b];
//     let temp=a;
//     a=b;
//     b=temp;
//     return [a,b];
// }
// console.log(swap(a,b));


// function rest(a,...b){
//     console.log(a,b);
// }
// console.log(rest(1,2,3,4,5));


// const arr=[18,10,12,15,9,11];
function quickSort(arr) {
  if (arr.length <= 1) return arr;

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([5, 3, 8, 1]));

// const obj = {
//     a: 1,
//     b: 2
// }
// const str = JSON.stringify(obj);
// console.log(str);

// const obj1 = {
//     name: "Shan",
//     address: {
//         city: "Delhi"
//     }
// };

// // Shallow copy
// const obj2 = { ...obj1 };

// obj2.address.city = "Mumbai";

// console.log(obj1.address.city); 


// const obj1 = {
//     name: "Shan",
//     address: {
//         city: "Delhi"
//     }
// };

// // Deep copy
// const obj2 = JSON.parse(JSON.stringify(obj1));

// obj2.address.city = "Mumbai";

// console.log(obj1.address.city);

// | Shallow Copy                   | Deep Copy                         |
// | ------------------------------ | --------------------------------- |
// | Copies first level only        | Copies full structure             |
// | Nested objects share reference | Nested objects are independent    |
// | Spread operator `{...obj}`     | `JSON.parse(JSON.stringify(obj))` |

const arr=[1,2,3,4,5];
const value=arr.reduce((acc,item)=>{
    return acc+item;
},0)
console.log(value);

// const str = "i am shantanu";
// let word = "";
// let result = "";

// for (let i = 0; i < str.length; i++) {
//   if (str[i] === " ") {
//     result = word + " " + result;
//     word = "";
//   } else {
//     word += str[i];
//   }
// }

// // Add last word
 result = word + " " + result;

console.log(result);
// shantanu am i


const str = "i am shantanu";
let result = "";
let word = "";

for (let i = 0; i < str.length; i++) {
  if (str[i] === " ") {
    // reverse current word
    for (let j = word.length - 1; j >= 0; j--) {
      result += word[j];
    }
    result += " ";
    word = "";
  } else {
    word += str[i];
  }
}

// reverse last word
for (let j = word.length - 1; j >= 0; j--) {
  result += word[j];
}

console.log(result);
// i ma unutnahs


// const str = "i am shantanu";
// let reversed = "";

// for (let i = str.length - 1; i >= 0; i--) {
//   reversed += str[i];
// }

// console.log(reversed);
// unatnahs ma i

let objk = [
  { name: "shan", age: 20 },
  { name: "shantanu", age: 30 }
];

let totalAge = objk.reduce((sum, curr) => {
  return sum + curr.age;
}, 0);

console.log(totalAge);