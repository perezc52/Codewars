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