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

//May 10 2022
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
  str = str.split(' ');
  let latinStr = [];
  for(let word of str) {
    if(word === '!' || word === '.' || word === ',' || word === '?') {
      latinStr.push(word);
      continue;
    }
    let firstLetter = word[0];
    word = word.slice(1) + firstLetter + 'ay';
    latinStr.push(word);
  }
  return latinStr.join(' ');
}

//May 11 2022
// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

function getMiddle(s) {
  if(s.length % 2 === 0) {
    return s.slice((s.length / 2) - 1, (s.length / 2) + 1)
  }else{
    return s.slice(Math.floor(s.length / 2), Math.floor(s.length / 2) + 1)
  }
}

//May 12 2022
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list(l) {
  return l.filter(el => typeof el === 'number');
}

//May 13 2022
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str){
  //P: a multiple word string delimited by an underscore or a dash
  //R: the taken in string converted to camel case.
  //E: "the-stealth-warrior" gets converted to "theStealthWarrior"
  //  "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
  //P: split the string by the _ or -, into an array.
      //capitalize the first letter of the words in the array starting from the second element
    if(str === '') return '';
    if(str.includes('-')) {
      let arr = str.split('-');
      let result = `${arr[0]}`;
      for(let i = 1; i < arr.length; i++) {
        result += arr[i][0].toUpperCase() + arr[i].slice(1);
      }
      return result;
      
    }
    if(str.includes('_')) {
      let arr = str.split('_');
      let result = `${arr[0]}`;
      for(let i = 1; i < arr.length; i++) {
        result += arr[i][0].toUpperCase() + arr[i].slice(1);
      }
      return result;
    }
  }

  //May 14 2022
//   A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
  string = string.toLowerCase();
  let alphabet = new Set(['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']);
  for(let i = 0; i < string.length; i++) {
    if(alphabet.has(string[i])) alphabet.delete(string[i]);
  }
  return alphabet.size === 0 ? true : false;
}

//May 15 2022
// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
  s = s.toUpperCase();
	let result = "";
  for(let i = 0; i < s.length; i++) {
    if(i === s.length - 1) {
      result += s[i] + s[i].toLowerCase().repeat(i);
    }else {
    result += s[i] + s[i].toLowerCase().repeat(i) + '-';
      }
  }
  return result;
}

//May 16 2022
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
  return Math.min(...(s.split(' ').map(el => el.length)))
}

//May 17 2022
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str){
  //P: takes in a string. may take in an empty string
  //R: returns true or false depending if the string is an isogram
  //E: "aba" -> false
  //    "moOse" -> false because it ignores case
  //P: check if string is empty and return true if it is
  //   turn the string to lowercase to ignore case
  //  
  if(str === '') return true;
  let collection = [];
  str = str.toLowerCase();
  for(let i = 0; i < str.length; i++) {
     if(collection.includes(str[i])) {
       return false;
     }else {
       collection.push(str[i])
     }
  }
  return true;
  
}

//May 18
// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"
// dnaStrand []        `shouldBe` []
// dnaStrand [A,T,G,C] `shouldBe` [T,A,C,G]
// dnaStrand [G,T,A,T] `shouldBe` [C,A,T,A]
// dnaStrand [A,A,A,A] `shouldBe` [T,T,T,T]

function DNAStrand(dna){
  return dna.split('').map(el => {
    if(el === 'A') return 'T';
    if(el === 'T') return 'A';
    if(el === 'C') return 'G';
    if(el === 'G') return 'C';
  }).join('')
}

//May 19 2022
// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"

// "Skippy" --> "##ippy"

// "Nananananananananananananananana Batman!"
// -->
// "####################################man!"

function maskify(cc) {
  return cc.split('').map((el, i, arr) => {
    return i < arr.length - 4 ? '#' : el;
  }).join('');
}