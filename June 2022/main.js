//June 1 2022
// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// Example:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"

function divisors(integer) {
    let result = [];
    for(let i = 1; i <= integer; i++) {
      if(i === 1 || i === integer) continue;
      if(integer % i === 0) result.push(i);
    }
    return result.length === 0 ? `${integer} is prime` : result
  };

  //June 2 2022
//   Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {  
  return str.split(' ').map(el => {
    return el.split('').reverse().join('')
  }).join(' ')
}

//June 3 2022
// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

// For example:

// Let's say you are given the array {1,2,3,4,3,2,1}:
// Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

// Let's look at another one.
// You are given the array {1,100,50,-51,1,1}:
// Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

// Last one:
// You are given the array {20,10,-80,10,10,15,35}
// At index 0 the left side is {}
// The right side is {10,-80,10,10,15,35}
// They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
// Index 0 is the place where the left side and right side are equal.

// Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

// Input:
// An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

// Output:
// The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

// Note:
// If you are given an array with multiple answers, return the lowest correct index.

function findEvenIndex(arr) {
  //loop through the array
      //split the array into two by each index and store the index
      //get the sum of the two split arrays
      //if they match then return the index, if not then continue
  //if loop ends without having found the index then return -1
    
    for(let i = 0; i < arr.length; i++) {
      let first = arr.slice(0, i)
      let second = arr.slice(i+1)
      let sum1 = first.reduce((acc, el) => acc + el, 0)
      let sum2 = second.reduce((acc, el) => acc + el, 0)
      if(sum1 === sum2) return i
    }
    return -1
  }

  //June 4 2022
//   Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output= [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

function removeSmallest(numbers) {
  let min = Math.min(...numbers)
  let firstIndex = numbers.findIndex(el => el === min)
  return numbers.slice(0,firstIndex).concat(numbers.slice(firstIndex+1))
}

//June 5 2022
// Write a function that returns both the minimum and maximum number of the given list/array.

// Examples(Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5, 2334454]
// [1]         --> [1, 1]

function minMax(arr){
  let min = Math.min(...arr)
  let max = Math.max(...arr)
  return [min, max]
}

//June 6 2022
// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)
// 4 --> 3 (1, 2, 4)
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

function getDivisorsCnt(n){
  let divs = []
  for(let i = 1; i <= n; i++) {
    if(n % i === 0) divs.push(i)
  }
return divs.length
}

//June 7 2022
// Your task is to split the chocolate bar of given dimension n x m into small squares. Each square is of size 1x1 and unbreakable. Implement a function that will return minimum number of breaks needed.

// For example if you are given a chocolate bar of size 2 x 1 you can split it to single squares in just one break, but for size 3 x 1 you must do two breaks.

// If input data is invalid you should return 0 (as in no breaks are needed if we do not have any chocolate to split). Input will always be a non-negative integer.

function breakChocolate(n,m) {
  return (n * m)  - 1 > 0 ? (n * m) - 1 : 0
}

//June 8 2022
// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
  let counts = {}
  for(let num of arr) {
    if(counts[num]) {
      counts[num]++
    }else {
      counts[num] = 1
    }
  }
  return Number(Object.keys(counts).filter(key => counts[key] === 1))
}

//June 9 2022
// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

function solution(nums){
  if(!nums) return []
  return nums.sort((a, b) => a - b)
}

//June 10 2022
// Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.

// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.

// Note to Tax: not the invested principal is taxed, but only the year's accrued interest

// Example:

//   Let P be the Principal = 1000.00      
//   Let I be the Interest Rate = 0.05      
//   Let T be the Tax Rate = 0.18      
//   Let D be the Desired Sum = 1100.00


// After 1st Year -->
//   P = 1041.00
// After 2nd Year -->
//   P = 1083.86
// After 3rd Year -->
//   P = 1128.30
// Thus Mr. Scrooge has to wait for 3 years for the initial principal to amount to the desired sum.

// Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum.

// Assumption: Assume that Desired Principal 'D' is always greater than the initial principal. However it is best to take into consideration that if Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.

function calculateYears(principal, interest, tax, desired) {
  let years = 0
  let accruedInterest = 0
  let taxAmount = 0
  while(principal < desired) {
    accruedInterest = principal * interest
    taxAmount = accruedInterest * tax
    principal += accruedInterest - taxAmount
    years++
  }
return years
}

//June 11 2022
// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

// Examples:

// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
// The result may contain fives. ;-)
// The start number will always be smaller than the end number. Both numbers can be also negative!

function dontGiveMeFive(start, end) {
  let count = 0
  for(let i = start; i <= end; i++) {
    if(String(i).includes('5')) continue
    count++
  }
  return count
}

//June 12 2022
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

function sumArray(array) {
  if(!array) return 0
  if(array.length < 3) return 0
  let sorted = array.sort((a, b) => a - b)
  sorted.pop()
  sorted.shift()
  return sorted.reduce((acc, el) => acc + el, 0)
}

//June 13 2022
// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// Example(Input1, Input2 --> Output):

// 6, 10 --> 32
// 3, 3 --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

const areaOrPerimeter = function(l , w) {
  if(l === w) {
    return l * w
  } else {
    return (2 * l) + (2 * w)
  }
};

//June 14 2022
// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

// The four operators are "add", "subtract", "divide", "multiply".

// A few examples:(Input1, Input2, Input3 --> Output)

// 5, 2, "add"      --> 7
// 5, 2, "subtract" --> 3
// 5, 2, "multiply" --> 10
// 5, 2, "divide"   --> 2.5

function arithmetic(a, b, operator){
  switch (operator) {
      case "add": return a + b
      case "subtract": return a - b
      case "multiply": return a * b
      case "divide": return a / b
  }
}

//June 15 2022
// Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.

// A few cases:


// (-12, 2, -6)  ->  true
// (-12, 2, -5)  ->  false

// (45, 1, 6)    ->  false
// (45, 5, 15)   ->  true

// (4, 1, 4)     ->  true
// (15, -5, 3)   ->  true

function isDivideBy(number, a, b) {
  return number % a === 0 && number % b === 0 ? true : false
}

//June 16 2022
// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

// Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).

function factorial(n) {
  if(n < 0 || n > 12) throw 'RangeError'
  let num = 1
  for(let i = 1; i <= n; i++) {
    num *= i
  }
  return num
}