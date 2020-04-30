// Your code here
function mapToNegativize(sourceArray){
    let newArray = [];
    for (let i = 0; i < sourceArray.length; i++){
        newArray.push(sourceArray[i] * -1);
    }
    return newArray;
}

function mapToNoChange(sourceArray){
    let newArray = sourceArray;
    return newArray;
}

function mapToDouble(sourceArray){
    let newArray = [];
    for (let i = 0; i < sourceArray.length; i++){
        newArray.push(sourceArray[i] * 2);
    }
    return newArray;
}

function mapToSquare(sourceArray){
    let newArray = [];
    for (let i = 0; i < sourceArray.length; i++){
        newArray.push(sourceArray[i] ** 2);
    }
    return newArray;
}

function reduceToTotal(sourceArray, startingPoint = 0){
    let total = startingPoint;
    for (let i = 0; i < sourceArray.length; i++){
        total += sourceArray[i]
    }
    return total;
}

function reduceToAllTrue(sourceArray) {
    let val;
    for (let i = 0; i < sourceArray.length; i++){
        if (sourceArray[i] === false){
           val = false;
           return val;
        }
        else{
            val = true;
        } 
    }
    return val;
}

function reduceToAnyTrue(sourceArray){
    for (let i = 0; i < sourceArray.length; i++){
        if (sourceArray[i] === true){
           return true;
        } 
    }
    return false;
}

