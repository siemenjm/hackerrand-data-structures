/*
 * Complete the 'dynamicArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

// Declare a 2-dimensional array, , of  empty arrays. All arrays are zero indexed.
// Declare an integer, , and initialize it to .

// There are  types of queries, given as an array of strings for you to parse:

// Query: 1 x y
// Let .
// Append the integer  to .
// Query: 2 x y
// Let .
// Assign the value  to .
// Store the new value of  to an answers array.
// Note:  is the bitwise XOR operation, which corresponds to the ^ operator in most languages. Learn more about it on Wikipedia.  is the modulo operator.
// Finally, size(arr[idx]) is the number of elements in arr[idx]

// Function Description

// Complete the dynamicArray function below.

// dynamicArray has the following parameters:
// - int n: the number of empty arrays to initialize in
// - string queries[q]: query strings that contain 3 space-separated integers

// Returns

// int[]: the results of each type 2 query in the order they are presented
// Input Format

// The first line contains two space-separated integers, , the size of  to create, and , the number of queries, respectively.
// Each of the  subsequent lines contains a query string, .

// Constraints

// It is guaranteed that query type  will never query an empty array or index.
// Sample Input

// 2 5
// 1 0 5
// 1 1 7
// 1 0 3
// 2 1 0
// 2 1 1
// Sample Output

// 7
// 3

function dynamicArray(n, queries) {
  // Write your code here
}
