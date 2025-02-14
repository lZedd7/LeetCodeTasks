// https://leetcode.com/problems/buy-two-chocolates/

/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    
    prices.sort((a,b) => a - b);

    let minCost = prices[0] + prices[1];

    if(minCost <= money) {
        return money - minCost;
    } else {
        return money;
    }
    
};