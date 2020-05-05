// Your code here
const mapToNegativize = (arr) => {
    const result = [];
    for (let i = 0; i < arr.length; i++){
        result.push(arr[i] * -1)
    };
    return result;
};

const mapToNoChange = (array) => {
    const result = array;
    return result;
};

const mapToDouble = (arr) => {
    const result = [];
    for (let i = 0; i < arr.length; i++){
        result.push(arr[i] * 2)
    };
    return result;
};

const mapToSquare = (arr) => {
    const result = [];
    for (let i = 0; i < arr.length; i++){
        result.push(arr[i] ** 2)
    };
    return result;
};

const reduceToTotal = (array, init = 0) => {
    let result = init;
    for ( let i = 0; i < array.length; i++ ) {
        result += array[i]
    };
    return result;
};

const reduceToAllTrue = (array) => {
    for (let i = 0; i < array.length; i++){
        if (!array[i]) { return false }
    };
    return true;
};

const reduceToAnyTrue = (array) => {
    for (let i = 0; i < array.length; i++){
        if (array[i]) { return true }
    };
    return false;
};