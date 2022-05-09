//May 1 2022
// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1

function sameCase(a, b){
    if(a.toUpperCase() === a.toLowerCase() || b.toUpperCase() === b.toLowerCase()){
      return -1;
    }else if((a.toUpperCase() === a && b.toUpperCase() === b) || (a.toLowerCase() === a && b.toLowerCase() === b)) {
      return 1;
    }else {
      return 0;
    }
    }

    //May 2 2022
//     Write a function that returns a string in which firstname is swapped with last name.

// nameShuffler('john McClane'); => "McClane john"

function nameShuffler(str){
  return str.split(' ').reverse().join(' ');
  
}

//May 3 2022
// The BOPE is the squad of special forces of police that usually handles the operations in the Favelas in Rio de Janeiro.

// In this Kata you have to write a function that determine the number of magazines that every soldier has to have in his bag.

// You will receive the weapon and the number of streets that they have to cross. Considering that every street the officer shoots 3 times. Bellow there is the relation of weapons:

// PT92 - 17 bullets
// M4A1 - 30 bullets
// M16A2 - 30 bullets
// PSG1 - 5 bullets

// Example:

// ["PT92", 6] => 2 (6 streets 3 bullets each)
// ["M4A1", 6] => 1

// The return Will always be an integer so as the params.

function magNumber(info){
  const totalBullets = info[1] * 3;
  if(info[0] === 'PT92') {
    return Math.ceil(totalBullets / 17);
  }else if(info[0] === 'M4A1') {
    return Math.ceil(totalBullets / 30);
  }else if(info[0] === 'M16A2') {
   return Math.ceil(totalBullets / 30);
  }else {
    return Math.ceil(totalBullets / 5);
  }
}

//May 4 2022
// Issue
// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

// The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

// Pipes list is correct when each pipe after the first index is greater (+1) than the previous one, and that there is no duplicates.

// Task
// Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

// Example
// Input: 1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8

function pipeFix(numbers){
  let first = numbers[0];
  let last = numbers[numbers.length - 1];
  let result = [];
  for(let i = first; i <= last; i++) {
    result.push(i);
  }
  return result;
}

//May 5 2022
// Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.

// Examples (input -> output)
// '! !'                 -> '! !'
// '123456789'           -> ''
// 'This looks5 grea8t!' -> 'This looks great!'
// Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.

function stringClean(s){
  return s.split('').filter(el => !['0','1','2','3','4','5','6','7','8','9'].includes(el)).join('')
}

//May 6 2022
// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
  let reversed = x.split('').reverse().join('');
  return x.toLowerCase() === reversed.toLowerCase();
}

//May 7 2022
// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

function powersOfTwo(n){
  let arr = [];
  for(let i = 0; i <= n; i++) {
    arr.push(2 ** i)
  }
  return arr;
}

//May 8 2022
// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2){
  if((flower1 % 2 === 0 && flower2 % 2 !== 0) || (flower1 % 2 !== 0) && (flower2 % 2 === 0)) {
    return true;
  }else {
    return false;
  }
}

//May 9 2022
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder=function(iterable){
  let unique = [];
  for(let i = 0; i < iterable.length; i++) {
    if(iterable[i] !== iterable[i-1]) {
      unique.push(iterable[i]);
    }
  }
  console.log(unique)
  return unique
}