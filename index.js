/* Data Types:
undefined, null, boolean, string, symbol, number, and object
*/

var myName = "Lucas";

myNumber = 3;

let ourName = "Thormann";

const pi = 3.14;

var sum = pi + myNumber;

var difference = pi - myNumber;

console.log(sum);
console.log(difference);

/***
 \'     single quote
 \"     double quote
 \\     backslash
 \n     newline
 \r     carriage return
 \t     tab
 \b     backspace
 \f     form feed
 ***/

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
var concat = "\tadd me!"
console.log(myStr + concat);
console.log(myStr.length)
console.log(myStr[4])


// Arrays
var ourArray = ["John", 23];
var nestedArray = [["the universe", 42], ["everything", 101010]];

console.log(nestedArray[0][1]);

ourArray.push(nestedArray);

console.log(ourArray);

var removedFromOurArray = ourArray.pop();

console.log(ourArray);

removedFromOurArray = ourArray.shift();

console.log(ourArray);

ourArray.unshift("happy");

console.log(ourArray);

var myList = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 2], ["eggs", 12]];


// Booleans
var trueBool = true;
var falseBool = false;

// Operators
var num1 = 10;
var num2 = 11;
var num3 = '10';
var num4 = 10;

if(num1 == num2){
    console.log("Valid");
}
else{
    console.log("invalid");
}

if(num1 === num3){
    console.log("\nnum1 strictly equals num3");
}
else if(num1 === num4){
    console.log("\nnum1 strictly equals num4");
}


