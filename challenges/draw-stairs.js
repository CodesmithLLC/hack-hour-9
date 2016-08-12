/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.
 
 For example:     
 drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/

function drawStairs(n) {
let space = " ";
for(var str = "*"; str.length <= n; str+="*"){
	console.log(space.repeat(n - str.length) + str);
}
}


module.exports = drawStairs;
