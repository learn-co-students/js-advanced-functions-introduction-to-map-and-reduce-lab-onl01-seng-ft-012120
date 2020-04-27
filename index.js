// // Your code here
// function mapToNegativize(sourceArray) {
//     sourceArray.map(e => -e );
//     return sourceArray;
// };
// function mapToNoChange(sourceArray) {
//     sourceArray.map(e => e);
//     return sourceArray;
// };
// function mapToDouble(sourceArray) {
//     sourceArray.map(e => e * 2);
//     return sourceArray;
// };

// function mapToSquare(sourceArray) {
//     sourceArray.map(e => e**);
//     return sourceArray;
// };

// function reduceToTotal(sourceArray, startingPoint) {

// }

// function reduceToAllTrue(sourceArray) {

// }

// function reduceToAnyTrue(sourceArray) {

// }

const mapToNegativize = (arr) => {
    const result = [];
    for(let i = 0; i < arr.length; i++){
        result.push(arr[i] * -1);
    };
    return result;
};


const mapToNoChange = function(array){
    const result = array;
    return result;
};


const mapToDouble = function(array){
    const result = [];
    for(let i = 0; i < array.length; i++){
        result.push(array[i] * 2);
    };
    return result;
};


const mapToSquare = function(array){
    const result = [];
    for(let i = 0; i < array.length; i++){
        result.push(array[i] ** 2);
    };
    return result;
};

const reduceToTotal = function(array, init = 0){
    let result = init;
    for(let i = 0; i < array.length; i++){
        result += array[i];
    };
    return result;
};

const reduceToAllTrue = function(array){
    for(let i = 0; i < array.length; i++){
        if (!array[i]) { return false };
    };
    return true;
};

const reduceToAnyTrue = function(array){
    for(let i=0; i < array.length; i++){
        if (array[i]) { return true };
    };
    return false;
}