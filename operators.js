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
var myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));