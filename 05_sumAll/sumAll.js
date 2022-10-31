const sumAll = function(startNum, endNum) {
    let sum = 0;
    let start, end;

    if (!(Number.isInteger(startNum) && Number.isInteger(endNum)) || (startNum < 0 || endNum < 0)) {
        return "ERROR";
    } else if (startNum < endNum) {
        start = startNum;
        end = endNum;
    } else {
        start = endNum;
        end = startNum;
    }

    for (let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
