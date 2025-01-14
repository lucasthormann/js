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