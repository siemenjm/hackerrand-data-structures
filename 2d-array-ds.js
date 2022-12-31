/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

/**
 * create var to store max hourglass sum in
 * loop through all the hourglasses
 * loop through each hourglass to find sum
 * if hourglass sum is higher than previous hourglass sum, update
 */

function hourglassSum(arr) {
  let maxSum = undefined;

  for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= 4; j++) {
      let topRowSum = 0;
      let bottomRowSum = 0;
      for (let col = j - 1; col <= j + 1; col++) {
        topRowSum += arr[i - 1][col];
        bottomRowSum += arr[i + 1][col];
      }

      const thisSum = topRowSum + bottomRowSum + arr[i][j];

      if (thisSum > maxSum || maxSum === undefined) {
        maxSum = thisSum;
      }
    }
  }

  return maxSum;
}

const testArr1 = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
]; // 16 hourglasses total in 6x6 array (4x4 total allowed positions)

const testArr2 = [
  [-9, -9, -9, 1, 1, 1],
  [0, -9, 0, 4, 3, 2],
  [-9, -9, -9, 1, 2, 3],
  [0, 0, 8, 6, 6, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

console.log(hourglassSum(testArr1));
console.log(hourglassSum(testArr2));
