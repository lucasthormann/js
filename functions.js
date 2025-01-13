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

console.log(wordBlanks("dog", "big", "ran", "quickly"));

function ourFunctionWithArgs(a, b){
    console.log(a-b);
}

ourFunctionWithArgs(10, 5);