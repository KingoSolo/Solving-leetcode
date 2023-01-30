/**  This code helps us to determine the possible number of ways we can climb a staircase 
 *   We can only move in 1s or 2s
 * @param {number} 
 * @return {number}
 */
var climbStairs = function(n) {
    let result=[0,1]
    if(n <= 0)return 0
      else if(n == 1) return result[1]
       else{

    for(let i=2; i < n; i++){
         let ans= result[i-1]+result[i-2]
         result.push(ans)
    }
    
    }
    let ways= result.reduce((acc,cur) => acc+cur,1)
    return ways
};

