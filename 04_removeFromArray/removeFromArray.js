const removeFromArray = function(arr, ...deletions) {

    for (let i = 0; i < deletions.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (deletions[i] === arr[j]) {
                arr.splice(j, 1);
            }
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;