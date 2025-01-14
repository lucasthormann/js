var myArray = [];
var i = 0;

while(i < 5){
    myArray.push(i);

    i++;
}

console.log(myArray);

for(var i = 0; i < 5; i++){
    myArray.push(i);
}

console.log(myArray);

var myTotal = 0;
for(var j = 0; j < myArray.length; j++){
    myTotal += myArray[j];
}
console.log(myTotal);

function multiplyAll(arr){
    var product = 1;
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr[i].length; j++){
            product *= arr[i][j];
        }
    }
    return product;
}

var product = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

console.log(product);

var l = 0;
do{
    myArray.push(l);
    l++;
}while(l < 5)

console.log(l, myArray);