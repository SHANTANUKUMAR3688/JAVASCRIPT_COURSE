let a="hello";
let b=a;
b="HELLO";
console.log(a); // hello
console.log(b); // HELLO

// how refrence work
let alpa="hi";
let bita=alpa;
console.log(bita);
alpa="hello";
console.log(alpa);

// object are dynamic in nature
const obl={
    name:"shan",
    weight:60
}
console.log(obl);

obl.height = 6;
console.log(obl);

// how to clone object
// clone object using -> spread operater,  assign() method, ilteration method 
// eg of cloning object using spread operator

// let src={
//     age:20,
//     wt:60,
//     ht:6
// }
// let dest={...src};
// src.age=30;
// console.log(src);
// console.log(dest);

// eg of cloning object using assign method
// let src={
//     age:20,
//     wt:60,
//     ht:6
// }
// let dest=Object.assign({},assign);
// src.age=30;
// console.log(src);
// console.log(dest);

// built in object are Math, Date

// (function() {
//   var message = "Hello from IIFE!";
//   console.log(message); // Output: Hello from IIFE!
// })()
// message is not accessible here because it's inside the IIFE's scope
// console.log(message); // This would cause an error

//What is the use of “this” keyword in JavaScript?
//The  this keyword in JavaScript refers to the object that is currently executing the code. Its value depends on how the function is called. 
// const person = {
//   firstName: "John",
//   lastName : "Doe", 
//   id   	: 5566,
//   fullName : function() {
//     return this.firstName + " " + this.lastName;
//   }
// }

//How does “this” behave in arrow functions vs regular functions?
// const obj = {
//   name: 'My Object',
//   regularFunction: function() {
//     console.log('Regular function this:', this.name); // 'My Object'
//     const arrowFunction = () => {
//       console.log('Arrow function this:', this.name); // 'My Object'
//     };
//     arrowFunction();
//   },
//   arrowFunction: () => {
//     console.log('Arrow function in obj this:', this.name); // undefined or global object name
//   }
// };

// obj.regularFunction();
// obj.arrowFunction();

// const globalObj = {
//     name: 'Global Object',
//     globalArrowFunction: () => {
//         console.log('Global Arrow Function:', this.name); //undefined or global object name
//     }
// }
// globalObj.globalArrowFunction();

let incr=5;
console.log(incr++);
console.log(incr);

let ques=[1,2,3,4,5]
let [answ]=ques;
console.log(answ);