https://leetcode.com/problems/to-be-or-not-to-be/

/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe : (valnew) => {
            if ( val !== valnew) throw new Error ('Not Equal');
            else return true;
        },

        notToBe : (valnew) => {
            if ( val == valnew) throw new Error('Equal');
            else return true;
        }
    }
};