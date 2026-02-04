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

