const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )

// forEach is a method that takes a callback function as an argument and executes that function once for each element in the array. The callback function can take up to three arguments: the current element being processed, the index of the current element, and the array itself. The forEach method does not return a new array, it simply executes the provided function for each element in the array.

// difference between forEach and map is that forEach does not return a new array, while map returns a new array with the results of calling a provided function on every element in the calling array. forEach is typically used when you want to perform side effects (like logging or modifying external variables) for each element, while map is used when you want to transform each element and create a new array based on those transformations.

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )