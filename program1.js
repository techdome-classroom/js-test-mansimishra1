/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
   
   
    const leftSym = [];
   
    for (let i = 0; i < s.length; i++) {
     
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            leftSym.push(s[i]);
        }
       
        else if (s[i] === ')' && leftSym.length !== 0 && leftSym[leftSym.length - 1] === '(') {
            leftSym.pop();
        } else if (s[i] === '}' && leftSym.length !== 0 && leftSym[leftSym.length - 1] === '{') {
            leftSym.pop();
        } else if (s[i] === ']' && leftSym.length !== 0 && leftSym[leftSym.length - 1] === '[') {
            leftSym.pop();
        }
       
        else {
            return false;
        }
    }
    return leftSym.length === 0;
};


module.exports = { isValid };


