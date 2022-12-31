// A left rotation operation on an array of size  shifts each of the array's elements  unit to the left. Given an integer, , rotate the array that many steps left and return the result.

// Example

// After  rotations, .

// Function Description

// Complete the rotateLeft function in the editor below.

// rotateLeft has the following parameters:

// int d: the amount to rotate by
// int arr[n]: the array to rotate
// Returns

// int[n]: the rotated array
// Input Format

// The first line contains two space-separated integers that denote , the number of integers, and , the number of left rotations to perform.
// The second line contains  space-separated integers that describe .

// Constraints

// Sample Input

// 5 4
// 1 2 3 4 5
// Sample Output

// 5 1 2 3 4

/*
 * Complete the 'rotateLeft' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER d
 *  2. INTEGER_ARRAY arr
 */

// figure out how to rotate one spot to the left, then do that d times

function rotateLeft(d, arr) {
  let rotatedArr = [];
  for (let i = d; i < arr.length; i++) {
    rotatedArr.push(arr[i]);
  }

  for (let i = 0; i < d; i++) {
    rotatedArr.push(arr[i]);
  }

  return rotatedArr;
}

console.log(rotateLeft(3, [1, 2, 3, 4, 5]));
