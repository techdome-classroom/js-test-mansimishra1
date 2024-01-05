/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (inputString) {
    // Stack to store left symbols
    const stack = [];

    // Loop for each character of the string
    for (let i = 0; i < inputString.length; i++) {
        const currentChar = inputString[i];

        // If left symbol is encountered
        if (currentChar === '(' || currentChar === '{' || currentChar === '[') {
            stack.push(currentChar);
        }
        // If right symbol is encountered
        else if (currentChar === ')' && stack.length !== 0 && stack[stack.length - 1] === '(') {
            stack.pop();
        } else if (currentChar === '}' && stack.length !== 0 && stack[stack.length - 1] === '{') {
            stack.pop();
        } else if (currentChar === ']' && stack.length !== 0 && stack[stack.length - 1] === '[') {
            stack.pop();
        }
        // If none of the valid symbols is encountered
        else {
            return false;
        }
    }

    // Check if the stack is empty, indicating balanced brackets
    return stack.length === 0;
};


module.exports = { isValid };


