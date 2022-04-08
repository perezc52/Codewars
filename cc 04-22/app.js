//April 7 2022
// Your task is to return the sum of Triangular Numbers up-to-and-including the nth Triangular Number.

// Triangular Number: "any of the series of numbers (1, 3, 6, 10, 15, etc.) obtained by continued summation of the natural numbers 1, 2, 3, 4, 5, etc."

// [01]
// 02 [03]
// 04 05 [06]
// 07 08 09 [10]
// 11 12 13 14 [15]
// 16 17 18 19 20 [21]
// e.g. If 4 is given: 1 + 3 + 6 + 10 = 20.

// Triangular Numbers cannot be negative so return 0 if a negative number is given.

function sumTriangularNumbers(n) {
    if(n < 0) return 0;
    let triangles = [];
    for(let i = 1; i <= n; i++) {
      triangles.push((i * (i + 1)) / 2);
    }
    return triangles.reduce((acc, num) => acc + num);
  }

  //April 8 2022
//   Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

function highestRank(arr){
  
  const nums = {};
  
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] in nums) {
      nums[arr[i]] = nums[arr[i]] + 1;
    }else {
      nums[arr[i]] = 1;
    }
  }

  let max = 0;
  for(const property in nums) {
    if(nums[property] > max) {
      max = nums[property];
      console.log(nums[property], max);
    }
  }

  let key = Object.keys(nums).filter(key => nums[key] === max);

  return Number(Math.max(...key));
}