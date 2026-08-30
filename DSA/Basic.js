const str="Hello Shan World";
const result=str.split("").reverse().join("");
console.log(result);

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
}

const str1 = "Hello Shan World";
let reversed = "";

for (const char of str1) {
  reversed = char + reversed;
}
console.log(reversed);

const n = 10;
let a = 0, b = 1;

console.log(a);
console.log(b);

for (let i = 2; i < n; i++) {
  let next = a + b;
  console.log(next);
  a = b;
  b = next;
}

