/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
    // Create a map of Roman numerals to integers
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let total = 0;
    let prevValue = 0;
    
    // Loop through the string from left to right
    for (let i = 0; i < s.length; i++) {
        const currentValue = romanMap[s[i]];
        
        // If the current value is greater than the previous value, subtract twice the previous value
        // This accounts for the subtractive combinations (like IV, IX, etc.)
        if (currentValue > prevValue) {
            total += currentValue - 2 * prevValue;
        } else {
            total += currentValue;
        }
        
        // Update the previous value
        prevValue = currentValue;
    }
    
    return total;
}

// Example usage:
console.log(romanToInt("III"));      // 3
console.log(romanToInt("LVIII"));    // 58
console.log(romanToInt("MCMXCIV"));  // 1994


module.exports={romanToInt}