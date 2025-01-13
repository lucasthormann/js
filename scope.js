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