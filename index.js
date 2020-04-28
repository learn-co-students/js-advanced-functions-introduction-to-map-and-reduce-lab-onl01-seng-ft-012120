// Your code here
function mapToNegativize(sourceArray) {
    const newArray = []
    for (let i = 0; i < sourceArray.length; i++ ) {
        newArray.push(sourceArray[i] * -1)
    }
    return newArray
}

function mapToNoChange(sourceArray) {
    const newArray = []
    for (let i = 0; i < sourceArray.length; i++ ) {
        newArray.push(sourceArray[i])
    }
    return newArray
}

function mapToDouble(sourceArray) {
    const newArray = []
    for (let i = 0; i < sourceArray.length; i++ ) {
        newArray.push(sourceArray[i] * 2)
    }
    return newArray
}

function mapToSquare(sourceArray) {
    const newArray = []
    for (let i = 0; i < sourceArray.length; i++ ) {
        newArray.push(sourceArray[i] ** 2)
    }
    return newArray
}

function reduceToTotal(sourceArray, startingPoint = 0) {
    let total = startingPoint 
    for (let i = 0; i < sourceArray.length; i++) {
        total += sourceArray[i]
    }
    return total 
}

function reduceToAllTrue(sourceArray) {
    let boo = true 
    for (let i = 0; i < sourceArray.length; i++) {
        if (boo && sourceArray[i]) {
            boo = true 
        } else {
            boo = false 
        }
    }
    return boo 
}

function reduceToAnyTrue(sourceArray) {
    let boo = false 
    for (let i = 0; i < sourceArray.length; i++) {
        if (boo || sourceArray[i]) {
            boo = true 
        } else {
            boo = false 
        }
    }
    return boo 
}