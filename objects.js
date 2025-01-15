var ourDog = {
    // properties: data
    "name": "Gerald",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

// dot notation method of accessing an objects properties
var hatValue = testObj.hat;
var shirtValue = testObj.shirt;


var testObj2 = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

// brakcet notation method of accessing an objects properties
var entreeValue = testObj2["an entree"];
var drinkValue = testObj2['the drink'];

console.log(hatValue + " " + shirtValue + " " + entreeValue + " " + drinkValue);

var testObj3 = {
    12: "Batman",
    16: "Robin",
    19: "Joker"
};

var playerNumber = 19;
var player = testObj3[playerNumber];

// change the value of an objects property
testObj.hat = "fedora";
console.log(player + " is wearing a " + testObj.hat);

// add new properties to an object
ourDog.bark = "bow-wow";
ourDog['hobby'] = "barking";

// delete properties from an object
delete ourDog.tails;

// testing objects for properties
function checkObj(checkProp){
    if (ourDog.hasOwnProperty(checkProp)){
        return ourDog[checkProp];
    }
    else{
        return "Not Found";
    }
}

console.log(checkObj("tails"));
console.log(checkObj("name"));

// manipulating complex objects (an array of two objects)
var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release-year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {
        "artist": "Lucas Thormann",
        "title": "Hot Cheeto Man",
        "release_year": 2000,
        "formats": [
            "CD",
            "MP3"
        ],
        "diamond": true
    }
];

var mySong = myMusic[1].title;
var myFormat = myMusic[1].formats[1];
console.log("You can listen to " + mySong + " as a(n) " + myFormat + " file!");

// Prevent object mutation (prevent data mutation)
function freezeObj(){
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS);

    try{
        MATH_CONSTANTS.PI = 99;

    }catch(ex){
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();
console.log(PI);
