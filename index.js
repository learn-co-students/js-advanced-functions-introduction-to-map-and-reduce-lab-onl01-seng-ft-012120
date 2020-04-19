// Your code here
const mapToNegativize = (arr) => {
    let result = [];
    for(let i = 0; i< arr.length; i++) {
        result.push(arr[i] * -1 );
    };
    return result;
}

const mapToNoChange = (arr) => {
    let result = [];
    for(let i = 0; i< arr.length; i++) {
        result.push(arr[i] * -1 );
    };
    return arr;
}

const mapToDouble = (arr) => {
    for(let i = 0; i < arr.length; i++) {
      arr[i] = arr[i] * 2;
    };
    return arr;
}

const mapToSquare = (arr) => {
    for(let i = 0; i < arr.length; i++) {
      arr[i] = arr[i] * arr[i];
    };
    return arr;
}

const reduceToTotal = (arr, start=0) => {
    let result = start;
    for(let i = 0; i < arr.length; i++) {
        result = result + arr[i] 
    }
    return result;
} 

const reduceToAllTrue = (arr) => {
    for (let i = 0; i < arr.length; i++ ) {
        if (!arr[i]) return false
      }
      return true
}

const reduceToAnyTrue = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) return true;
    }
    return false;
}