// https://leetcode.com/problems/sleep/description/

/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    await new Promise(resolve => setTimeout(resolve,millis))
}

/**/