//July 31 2023

// Task

// King Arthur and his knights are having a New Years party. Last year Lancelot was jealous of Arthur, because Arthur had a date and Lancelot did not, and they started a duel.

// To prevent this from happening again, Arthur wants to make sure that there are at least as many women as men at this year's party. He gave you a list of integers of all the party goers.

// Arthur needs you to return true if he needs to invite more women or false if he is all set.
// Input/Output

//     [input] integer array L ($a in PHP)

// An array (guaranteed non-associative in PHP) representing the genders of the attendees, where -1 represents women and 1 represents men.

// 2 <= L.length <= 50

//     [output] a boolean value

//     true if Arthur need to invite more women, false otherwise.

function inviteMoreWomen(L) {
    let women = L.filter(el => el === -1).length
    let men = L.filter(el => el === 1).length
    return women >= men ? false : true
   }

   //August 1 2023

//    You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

// Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

// Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics

function fixTheMeerkat(arr) {
 return arr.reverse()
}

//August 2 2023
// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value. 

function explode(s) {
  return s.split('').map(el => el.repeat(Number(el))).join('')
}

//August 3 2023

// Complete the solution so that the function will break up camel casing, using a space between words.
// Example

// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
  return string.split('').map(el => (el === el.toUpperCase() ? ` ${el}` : el)).join('')
}

