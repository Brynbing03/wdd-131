const PI = 3.14;
let radius = 3;

let area = 0;

area = radius * radius * PI; 
// You can also do "let area = radius * radius * PI;" in place since area = nothing or 0

console.log(area);

// radius = 20;
// let area = radius * radius * PI;
// console.log(area);

// type coersion
const one = 1;
const two = "2";

let result = one * two;
console.log(result);

result = one + two;
console.log(result);

// scope
let global = "I'm global";

function exampleFunction() {
    let block = "I am block level or local";
    console.log(block);
    console.log(global);
}

// console.log(block);
console.log(global);
exampleFunction();

global = "I am also global";

console.log(global);