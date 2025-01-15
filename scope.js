var myGlobal = 10;

function fun1(){
    oopsGlobal = 5;
}

function fun2(){
    var localVar = 7;
}

function fun3(){
    var output = "";
    if(typeof myGlobal != "undefined"){
        output += "myGlobal: " + myGlobal;
    }
    if(typeof oopsGlobal != "undefined"){
        output += " oopsGlobal: " + oopsGlobal;
    }
    if(typeof localVar != "undefined"){
        output += " localVar: " + localVar;
    }
    console.log(output);
}

fun1();
fun2();
fun3();

// var vs let scope
function checkVarScope(){
    "use strict";
    var i = "function scope";
    if(true){
        i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}

checkVarScope();

function checkLetScope(){
    "use strict";
    let i = "function scope";
    if(true){
        let i = "block scope";
        console.log("\nBlock scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}

checkLetScope();