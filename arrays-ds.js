/*
 * Complete the 'reverseArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function reverseArray(a) {
  let reversedArray = [];
  for (let i = a.length - 1; i >= 0; i--) {
    reversedArray.push(a[i]);
  }

  return reversedArray;
}

console.log(reverseArray([1, 4, 3, 2])); // => [2, 3, 4, 1]
