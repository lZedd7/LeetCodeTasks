// https://leetcode.com/problems/remove-trailing-zeros-from-a-string/description/


/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
    return num.replace(/0+$/, '');
};