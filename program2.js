/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a Roman numeral: ', function (userInput) {
    const romanNumeralValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let integerValue = 0;

    for (let index = 0; index < userInput.length; index++) {
        const currentSymbolValue = romanNumeralValues[userInput[index]];
        const nextSymbolValue = romanNumeralValues[userInput[index + 1]];

        if (nextSymbolValue > currentSymbolValue) {
            integerValue += nextSymbolValue - currentSymbolValue;
            index++; // Skip the next symbol since it's already considered
        } else {
            integerValue += currentSymbolValue;
        }
    }

    console.log('The equivalent integer value is:', integerValue);

    rl.close();
});

};


module.exports={romanToInt}
