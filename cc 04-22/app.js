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

//April 9 2022
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers){
  return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
}

//April 10 2022
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

function likes(names) {
  if(names.length === 0) return "no one likes this";
  if(names.length === 1) return `${names[0]} likes this`;
  if(names.length === 2) return `${names[0]} and ${names[1]} like this`;
  if(names.length === 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  if(names.length >= 4) return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
}

//April 11 2022
// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(A) {
  let nums = {};
  
  for(let i = 0; i < A.length; i++) {
    if(A[i] in nums) {
      nums[A[i]]++;
    }else {
      nums[A[i]] = 1;
    }
  }
  
  const result = Object.keys(nums).filter(num => nums[num] % 2 === 1);
  return Number(result[0]);
}

//April 12 2022
// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function digital_root(num) {
  
  let numArr = num.toString().split('');

  let sum = numArr.map(num => Number(num)).reduce((acc, num) => acc + num);

  while(!(sum < 10)) {
    sum = sum.toString().split('').map(num => Number(num)).reduce((acc, num) => acc + num);
  }
  
  return sum;
  }

  //April 13 2022
//   Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(string){
  let wordsArr = string.split(' ');
  
  for(let i = 0; i < wordsArr.length; i++) {
    if(wordsArr[i].length >= 5){
     wordsArr[i] = wordsArr[i].split('').reverse().join('');
    }
  }
  
  return wordsArr.join(' ');
}

//April 14 2022
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]


function arrayDiff(a, b) {
  
  for(let i = 0; i < b.length; i++) {
    for(let j = 0; j < a.length; j++) {
      if(a[j] === b[i]) a[j] = 'x';
    }
  }
  
  return a.filter(num => typeof num === 'number');
}