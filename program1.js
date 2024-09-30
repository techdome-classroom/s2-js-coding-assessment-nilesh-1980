/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
    // Stack to store opening brackets
    const stack = [];
    // Map to define matching pairs
    const matchingBrackets = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    
    // Loop through each character in the string
    for (let char of s) {
        // If the character is an opening bracket, push it onto the stack
        if (matchingBrackets[char]) {
            stack.push(char);
        } 
        // If the character is a closing bracket, check if it matches the top of the stack
        else {
            // If the stack is empty or the top of the stack doesn't match, return false
            if (stack.length === 0 || matchingBrackets[stack.pop()] !== char) {
                return false;
            }
        }
    }
    
    // If the stack is empty, all brackets were matched, return true
    return stack.length === 0;
}


module.exports = { isValid };


