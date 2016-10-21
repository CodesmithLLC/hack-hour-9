/*
  Construct Pascal's Triangle up to n levels deep, starting from n = 1. Each row
  is represented as an array of numbers.

  https://en.wikipedia.org/wiki/Pascal%27s_triangle

  e.g.
  pascalTriangle(1):
  [[1]]

  pascalTriangle(2):
  [
    [1],
    [1, 1]
  ]

  pascalTriangle(3) :
  [
    [1],
    [1,1],
    [1,2,1]
  ]

  pascalTriangle(6) :
  [
    [1],
    [1,1],
    [1,2,1],
    [1,3,3,1],
    [1,4,6,4,1],
    [1,5,10,10,5,1]
  ]
*/

'use strict';

function pascalTriangle(numRows) {
  if (numRows === 1) return [[1]];

  const prevTriangle = pascalTriangle(numRows - 1);
  const prevRow = prevTriangle[prevTriangle.length - 1];
  const newRow = [];

  for (let i = 0; i < numRows; i++) {
    const num = !!prevRow[i - 1] + !!prevRow[i];
    newRow.push(num);
  }

  prevTriangle.push(newRow);

  return prevTriangle;
}

// var temp = pascalTriangle(3);

module.exports = pascalTriangle;
