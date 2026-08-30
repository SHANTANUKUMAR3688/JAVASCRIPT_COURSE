// rest operator

// function sum(a,b,c,...other){
//     console.log(other);
//     return a+b+c;
// }

// const res=sum(1,2,3,4,5,6);
// console.log(res);

// var student={
//     name:"shan",
//     age:25,
//     hobbies:["coding","reading","traveling"]
// }
// const {name,...rest}=student;

// spread operator

// var names=["shan","kumar","sai"];
// function getnames(name1,name2,name3){
//     console.log(name1,name2,name3);
// }
// getnames(...names);

// var newstudent={
//     ...student,
//     age:'30'
// }
// console.log(newstudent);

// let a= function sum(a,b,c){
//     return a+b+c;
// }

// clouser

var sum=function (a){
    console.log("value of a is ",a);
    let c=4;
    return function(b){
        console.log("value of b is ",b);
        console.log("value of c is ",c);
        return a+b+c;
    }
}

function outer(){
    let a=10;
    function inner(){
        console.log(a);
    }
    return inner();
}
outer();

var store=sum(2);
console.log(store(3));

// call,apply,bind

// let userDetails={
//     name:"shan",
//     age:25,
//     designation:"software engineer",
//     // printdetails:function(){
//     //     console.log(this.name);
//     // }
// }
// //userDetails.printdetails();

// let printdetails=function(){
//         console.log(this.name);
//     }
// printdetails.call(userDetails);

// let userDetails2={
//     name:"shantanu",
//     age:25,
//     designation:"software engineer",
// }
// //userDetails.printdetails.call(userDetails2);
// printdetails.call(userDetails2);

// apply

let printdetails=function(state,country){
        console.log(this.name+state+country);
    }

let userDetails2={
    name:"shantanu",
    age:25,
    designation:"software engineer",
}
//userDetails.printdetails.call(userDetails2);
//printdetails.call(userDetails2);
//printdetails.call(userDetails2,"delhi","india");
//printdetails.apply(userDetails2,['delhi','india']);

// bind
let newfun=printdetails.bind(userDetails2,"delhi","india");
// console.log(newfun);
newfun();


// types of object creation
const obj=new Object({
    name:"shan"
})
const obj1=new obj();
const obj3={
    name:"shantanu"
}

// prototype
const obj4={
    name:'shan',
    getname:function(){
        return this.name;
    }
}


const obj5={
    roll:1,
    _proto_:obj4
}
console.log(obj5.getname());

// map,set,weakmap,weakset

// 1️⃣ Map

// A Map is a collection of key-value pairs.

// Keys can be any type (object, number, string).

// Maintains the insertion order.

// const map = new Map();

// map.set("name", "Rahul");
// map.set(1, "One");
// map.set(true, "Boolean Key");

// console.log(map.get("name")); // Output: Rahul
// console.log(map.has(1));      // Output: true

// map.delete(true);
// console.log(map.size);        // Output: 2
// 2️⃣ Set

// A Set is a collection of unique values.

// No duplicates allowed.

// const set = new Set();

// set.add(1);
// set.add(2);
// set.add(2);   // ignored
// set.add("hello");

// console.log(set);        // Output: Set(3) { 1, 2, 'hello' }
// console.log(set.has(2)); // true
// set.delete(1);
// console.log(set.size);   // 2
// 3️⃣ WeakMap

// Similar to Map, but keys must be objects.

// Keys are weakly referenced → allows garbage collection if no other references exist.

// Cannot iterate over WeakMap.

// const wm = new WeakMap();

// let obj = { name: "Rahul" };
// wm.set(obj, "Developer");

// console.log(wm.get(obj)); // Output: Developer

// obj = null; // obj can now be garbage collected

// 🔹 Use WeakMap when you want object keys without preventing garbage collection.

// 4️⃣ WeakSet

// Similar to Set, but only stores objects.

// Objects are weakly referenced → can be garbage collected.

// Cannot iterate over WeakSet.

// const ws = new WeakSet();

// let user = { name: "Amit" };
// ws.add(user);

// console.log(ws.has(user)); // true

// user = null; // object can be garbage collected

// 🔹 Use WeakSet for tracking objects without preventing memory cleanup, e.g., DOM nodes.

// ✅ Quick Comparison Table
// Feature	Map	Set	WeakMap	WeakSet
// Key Type	Any	N/A	Object only	Object only
// Value Type	Any	N/A	Any	N/A
// Duplicate Keys	No	N/A	No	N/A
// Duplicate Values	Allowed	No	Allowed	No
// Iteratable	Yes	Yes	No	No
// Garbage Collected	N/A	N/A	Yes (weak keys)	Yes (weak objs)


function debounce(func, delay) {
    let timer;

    return function() {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func();
        }, delay);
    };
}

function sayHello() {
    console.log("Hello Shantanu 👋");
}

const debouncedHello = debounce(sayHello, 2000);

// document.addEventListener("click", debouncedHello);
console.log(debouncedHello);



