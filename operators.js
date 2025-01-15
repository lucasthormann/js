// const keyword
function printManyTimes(str){
    "use strict";

    var sentence = str + " is cool";

    sentence = str + " is amazing";

    for(var i = 0; i < str.length; i++){
        console.log(sentence);
    }
}
printManyTimes("Lucas");

function printManyTimesConst(str){
    "use strict";

    const sentence = str + " is cool";

    // uncomment for type error
    // sentence = str + " is amazing";

    for(var i = 0; i < str.length; i++){
        console.log(sentence);
    }
}
printManyTimesConst("Lucas");

// mutate a const array
const s = [5, 7, 2];
function editInPlace(){
    "use strict";

    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}
editInPlace()
console.log(s);


// Anonymous function written using arrow function
var magic = () => {
    return new Date();
};

// Above function shortened further
const magic1 = () => new Date();

// Arrow function with parameter
const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));

// Higher Order arrow functions
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
}

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

// Default parameters
const increment = (function() {
    return function increment(number, value = 1){
        return number + value;
    };
})();
console.log(increment(5, 2));
console.log(increment(5));

// Rest Operator with function parameters
const sum = (function() {
    return function sum(...args){
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(1, 2, 3, 4));
