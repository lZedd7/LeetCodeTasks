https://leetcode.com/problems/memoize/


/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = String(args);
        if ( args in cache) {
            return cache[key];
        }
       const res =  fn(...args);
         cache[key] = res;
         return res;
    }
}
// Decorate Design Pattern


// /  * let callCount = 0;
// /  * const memoizedFn = memoize(function (a, b) {
// / *	 callCount += 1;
// /  *   return a + b;
// / * })
// /  * memoizedFn(2, 3) // 5
// /  * memoizedFn(2, 3) // 5
// / * console.log(callCount) // 1 
 