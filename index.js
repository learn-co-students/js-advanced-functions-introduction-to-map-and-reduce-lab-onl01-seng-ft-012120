// Your code here

function mapToNegativize(arr) {
    return arr.map(x => x * -1);
}

function mapToNoChange(arr) {
    return arr.map(x => x);
}

function mapToDouble(arr) {
    return arr.map(x => x * 2);
}

function mapToSquare(arr) {
    return arr.map(x => x ** 2);
}

function reduceToTotal(arr, start=0) {
    return arr.reduce((total, x) => total + x, start);
}

function reduceToAllTrue(arr, start=true) {
    return arr.reduce((x, y) => {
        if (!y) {
            x = false;
        }
        return x;
    }, start);
}

function reduceToAnyTrue(arr, start=false) {
    return arr.reduce((x, y) => {
        if (y) {
            x = true;
        }
        return x;
    }, start);
}