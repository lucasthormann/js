// Functions
function ourReusableFunction(){
    console.log("Heyya, World!");
}

ourReusableFunction();

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
    var result = "";

    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb + ".";


    return result;
}

var gameResult = wordBlanks("dog", "big", "ran", "quickly")

console.log(gameResult);

function ourFunctionWithArgs(a, b){
    console.log(a-b);
}

ourFunctionWithArgs(10, 5);

function caseInSwitch(val){
    var answer = "";
    switch(val){
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
        default:
            answer = "No passing cases!";
            break;
    }

    return answer;
}

console.log(caseInSwitch(4));
console.log(caseInSwitch(0));

function isLess(a, b){
    if(a < b){
        return true;
    } else{
        return false;
    }
}

var bool = isLess(10, 15);
console.log(bool);

function efficientIsLess(a, b){
    return a < b;
}
//----------------------------------------------------------------------------------------------------------------------------------------------------
// Arrow functions again from bottom to top
// a concise way to write function expressions. Good for simple functions that you use only once.

function hello(){
    console.log("Hello");
}

hello();

const hello1 = function(){ // using a function expression
    console.log("Hello1");
}

hello1();

const hello2 = () => console.log("Hello2"); // using arrow function

hello2();

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));
const evenNums = numbers.filter((element) => element % 2 === 0);

console.log(squares, evenNums);

