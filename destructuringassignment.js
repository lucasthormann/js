var voxel = {x: 3.6, y: 7.4, z: 6.54 };

var x = voxel.x; // x = 3.6
var y = voxel.y; // y = 7.4
var z = voxel.z; // z = 6.54

const { x: a, y: b, z: c } = voxel; // a = 3.6, b = 7.4, c = 6.54 (destructuring syntax)

const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

function getTempOfTmrw(avgTemperatures){
    "use strict";

    const {tomorrow: tempOfTomorrow } = avgTemperatures; // destructuring assignment

    return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES));


// Destructuring assignment with nested objects
const LOCAL_FORECAST = {
    today: {min: 72, max: 83},
    tomorrow: {min: 73.3, max: 84.6}
};

function getMaxOfTmrw(forecast){
    "use strict";

    const { tomorrow: {max: maxOfTomorrow}} = forecast; // desctructured twice

    return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST));

// Destructuring from arrays
const [d, e, , f] = [1, 2, 3, 4, 5, 6];
console.log(d, e, f);

let i = 8, j = 6;
(() => {
    "use strict";
    [i, j] = [j, i]
})();

console.log(i);
console.log(j);

// Desctructuring assignment with rest operator
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list){
    const [, , ...arr] = list;

    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);


// Use destructuring assignment to pass an object as a function's parameter
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = (function() {
    return function half({ max, min }){ // desctructured
        return (max + min) / 2.0;
    };
})();
console.log(stats);
console.log(half(stats));
