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