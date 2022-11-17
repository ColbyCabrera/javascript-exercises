// create two arrays and reverse the second (each array has n / 2 + 1 elements)
// reverse the second
// if arrays equal each other return true

const palindromes = function (phrase) {

    letters = Array.from(phrase.toLowerCase());

    letters = letters.filter(letter =>  /^[A-Z]+$/i.test(letter));
    
    let half = (letters.length / 2 + 1);
    let fHalf = letters.slice(0, half);
    let lHalf;
    
    if (letters.length % 2 === 0) {

        lHalf = letters.slice(half - 2, letters.length).reverse()
    } else {

        lHalf = letters.slice(half - 1, letters.length).reverse()
    }

    if (fHalf.join() === lHalf.join()) {
        return true;
    }

    return false;
};

palindromes("'Animal loots foliated detail of stool lamina.");


// Do not edit below this line
module.exports = palindromes;
