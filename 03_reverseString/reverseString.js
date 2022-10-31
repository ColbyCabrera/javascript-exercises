const reverseString = function(string) {

    stringArray = [];
    let reverseString = "";

    for (let i = 0; i < string.length; i++) {
        //stringArray.push(string.charAt(i));
        reverseString = reverseString.concat(string.charAt((string.length - 1) - i));
    }

    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
