// const arr1=[1,2,3];
// const str="1,2,3";
// console.log(arr1==str); //true

console.log(1+2+'3') //33
console.log('1'+2+3) //123

// let x=0??2||3
// console.log(x)//3

console.log(5<8>2)// false

// const arr=[];
// let res=arr.every(x=>x>0);
// console.log(res) //true

// const arr=[1,21,30,4];
// arr.sort(); // sort method converts elements to strings and compares their sequences of UTF-16 code unit values.
// console.log(arr) //[1, 21, 30, 4]

console.log(0 ||'hello') //hello || operator returns the right-hand side operand when the left-hand side operand is falsy, otherwise it returns the left-hand side operand.
console.log(0 &&'hello') //0 && operator returns the right-hand side operand when the left-hand side operand is truthy, otherwise it returns the left-hand side operand.
console.log(0??'hello') //0  ?? operator returns the right-hand side operand when the left-hand side operand is null or undefined, otherwise it returns the left-hand side operand.

setTimeout((a,b)=>{
    console.log(a+b);
},0,1,2,13) //3

const obj={
    a:10,
    f:function(){
        return this.a
    }
}
console.log(obj.f()) //10

let nums=[1,2,3,4,5];
delete nums[2];
console.log(nums) //[1, 2, empty, 4, 5]
console.log(nums.length) //5

var arrA=[0];
var arrB=arrA;
arrB[0]=42;
console.log(arrA) //[42]

//console.log("shan"-"kumar") //NaN

// console.log(isNaN("shan")) //true

// console.log([]==![]) //true

// console.log(0.1+0.2===0.3) //false

// console.log([]+[])
console.log([1]+[])//"1"
console.log([1]+'abc') //1abc

if([]==[]){
    console.log("this is truthy");
}else{
    console.log("this is falsy");
}

//[]==[] // false exp= array is non-primitive data type that's why they copied by reference not by value that's why when we compare two array it compare reference not value and give false because they are different array in memory location
//[]=='' // true exp= when we compare array with string it convert array into string and then compare and give true because both are empty string after conversion
//[]==![] // true exp= ![] is false and when we compare array with boolean it convert array into string and boolean into number and then compare and give true because both are empty string after conversion

console.log('2'>'10') //true because when we compare string it compare their unicode value and unicode value of 2 is greater than 1
console.log('2'>10) // false because when we compare string with number it convert string into number and then compare and give false because 2 is less than 10

{
    var a=1;
    let b=2;
    const c=3;
}
console.log(a,b,c)

console.log(0.1+0.2===0.3) //false because of floating point precision issue in JavaScript, where the result of 0.1 + 0.2 is not exactly 0.3 due to how numbers are represented in binary.

console.log(1+false) //1+0
console.log(1+true) //1+1
console.log(1+undefined) //NaN because when we add undefined to a number it gives NaN
console.log(1+null) //1+0 because when we add null to a number it gives 0
console.log(1+NaN) //NaN because when we add NaN to a number it gives NaN
console.log(1+{}) //1+[object Object] because when we add object to a number it convert object into string and then concatenate it with number
console.log(1+[]) //1+'' because when we add array to a number it convert array into string and then concatenate it with number
console.log(1+function(){}) //1+function(){} because when we add function to a number it convert function into string and then concatenate it with number
console.log(1+Symbol('a')) //TypeError because when we add symbol to a number it gives TypeError
console.log(1+BigInt(2)) //TypeError because when we add BigInt to a number it gives TypeError
console.log(1+new Date()) //1+current timestamp because when we add date to a number it convert date into timestamp and then add it with number

console.log(+true); //1
console.log(!'sai') // false

var z=1, y=z=typeof y
console.log(y) // undefined

//console.log('1'--'1'); //2
//console.log('abc'++'abc') //NaN because when we use ++ operator with string it gives NaN

let newlist=[1].push(2);
console.log(newlist.push(3)) //3 because push method returns the new length of the array after adding the new element

let num=0;
console.log;(num++)//0
console.log(++num)//2
console.log(num)//2

console.log(data()) // typeerror
var data=function(){
    return '1'
}

const s1='hello';
const s2=new String('hello')
console.log(s1==s2);// true
console.log(s1===s2);// false

console.log(Boolean({})) //true
console.log(Boolean([])) // true
console.log(Boolean(''))// false
console.log(new Boolean(false)) // true

console.log([]=0)
console.log([0]==0)

console.log(typeof NaN) //number
console.log(typeof null) //object
console.log(typeof undefined) //undefined
console.log(typeof []) //object
console.log(typeof {}) //object
console.log(typeof function(){}) //function
console.log(typeof Symbol('a')) //symbol
console.log(typeof BigInt(1)) //bigint
console.log(typeof new Map()) //object
console.log(typeof new Set()) //object
console.log(typeof new WeakMap()) //object
console.log(typeof new WeakSet()) //object

console.log(+true)
console.log(+false)
console.log(+null)
console.log(+undefined)

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

test();
console.log(x);
console.log(test);
// test2();
// console.log(test2);

const x=10;

function test(){
    console.log("hello world");
}

const test2 =()=>{
    console.log("hello earth");
}

const objnew={
    name:"shan",
    greet:function(){
        return this.name;
    },
    arrowgreet:()=>{
        return this.name;
    }
}

console.log(objnew.greet());
console.log(objnew.arrowgreet());

// let F="8"
// let A=1
// console.log((+F)+A+1) // ans=10   exp=(+8) become no 8 then 1 added into it and again final result is 10

// x=10
// console.log(x); // ans=10
// var x;

// console.log(+true)  // 1
// console.log(+false) // 0
// console.log(+"123") // 123
// console.log(+null) // 0

// console.log(!"sai") // false exp= string are truth value and ! convert into oppositive value

//console.log(true+false) // 1 exp=convert into number 1+0=1

// let nums=[1,2,3,4]
// delete nums[2]
// console.log(nums) // [ 1, 2, <1 empty item>, 4 ]

// var arrA=[0]
// var arrB= arrA
// arrB[0]=42
// console.log(arrA) // 42 exp=array is non-primitive data type that's why they copied by reference not by value that's why when we change in arrB is effect arrA

//console.log(2+"2"-1) // 21 exp=it start from left to right 2+"2" become 22 and 1 is subtracted from it and give 21 (if any operant other than + is concat with string then it convert string into number)

// for(let i=0;i<3;i++){
//     setTimeout(function(){
//         console.log(i);  ans=0,1.2
//     },1000) 
// }

// for(var i=0;i<3;i++){
//     setTimeout(function(){
//         console.log(i); ans=3,3,3
//     },1000)
// }

// const user={  cannot understand
//     name:"shan",
//     greet:function(){
//         setTimeout(function(){
//             console.log(`hi, i am ${this.name}`)  hi, i am undefined
//         },1000)
//     }
// }
// user.greet();

// var name="this is js";
// (function abc (){
//     console.log(name);  // undefined
//     var name="this is javascript";
// })();


// | Feature             | Normal Function | Arrow Function      |
// | ------------------- | --------------- | ------------------- |
// | Syntax              | Traditional     | Short               |
// | `this`              | Dynamic         | Lexical (inherited) |
// | `arguments`         | Yes             | No                  |
// | Constructor (`new`) | Yes             | No                  |
// | Hoisting            | Yes             | No (if const/let)   |


let a="hello";
let b=a;
b="HELLO";
console.log(a); // hello
console.log(b); // HELLO

// how refrence work
let alpa="hi";
let bita=alpa;
console.log(bita);// hi
alpa="hello";
console.log(alpa);// hello
console.log(bita);// hi

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

// var x=1;
// a();
// b();
// c();
// f();
// console.log(x);

// function a(){
//     var x=10;
//     console.log(x);
// }

// function b(){
//     var x=100;
//     console.log(x);
// }

// function c(){
//     var x=1000;
//     console.log(x);
//     function d(){
//         var x=10000;
//         console.log(x);
//     }
// }

// function e(){
//     var x=100000;
//     console.log(x); 
// }

// function f(){
//     e();
// }


// console.log(shan);
// var shan="hello";