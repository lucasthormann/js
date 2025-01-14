// generating random whole number
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum(){
    return Math.floor(Math.random() * 10);
}

console.log(randomWholeNum());

function randomRange(myMin, myMax){

    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

var myRandom = randomRange(5, 15);

console.log(myRandom);


// parseInt function
function convertToInteger(str){
    return parseInt(str);
}

convertToInteger("54");

function convertBinToInteger(str){
    return parseInt(str, 2);
}
convertBinToInteger("10011");