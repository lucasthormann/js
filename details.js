// Ternary Operator
function checkEqual(a, b){
    return a === b ? true : false;
}

checkEqual(1, 2);

// Multiple Ternary Operators
function checkSign(num){
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}

console.log(checkSign(10));

// let doesn't let you declare a variable twice, var does
var catName = "Sugar";
let quote = "";
var catName = "Spice";


function catTalk(){
    "use strict";

    catName = "Everything Nice";
    quote =  catName + " says Meow!";
    return quote;

}

console.log(catTalk());