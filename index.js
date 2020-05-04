// Your code here
// mapToNegativize returns an array with all values made negative

function mapToNegativize(sourceArray) {
    let r = []
    for (let i = 0; i < sourceArray.length; i++) {
        r.push(-1 * sourceArray[i])
    }
    return r
}
function mapToNoChange(sourceArray) {
    let r = []
    for (let i = 0; i < sourceArray.length; i++) {
        r.push(sourceArray[i])
    }
    return r
}

// mapToDouble returns an array with the original values multiplied by 2
function mapToDouble(sourceArray) {
    let r = []
    for (let i = 0; i < sourceArray.length; i++) {
        r.push(2*sourceArray[i])
    }
    return r
}

// mapToSquare returns an array with the original values squared

function mapToSquare(sourceArray) {
    let r = []
    for (let i = 0; i < sourceArray.length; i++) {
        r.push(sourceArray[i]* sourceArray[i])
    }
    return r
}

// reduceToTotal returns a running total when not given a starting point


function reduceToTotal(sourceArray, startingPoint=0) {
    let total = startingPoint
    for (let i = 0; i < sourceArray.length; i++) {
        total = total + sourceArray[i]
    }
    return total
}

// reduceToAllTrue returns true when all values are truthy

function reduceToAllTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (!sourceArray[i]) return false
    }
    return true
}

//reduceToAnyTrue returns true when a true value is present

//  reduceToAnyTrue returns false when no true value is present

function reduceToAllTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (!sourceArray[i]) return false
    }
    return true
}


function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i]) return true
    }
    return false
}