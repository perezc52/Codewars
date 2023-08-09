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

//August 4 2023
// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!
// input

//     customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
//     n: a positive integer, the number of checkout tills.

// output

// The function should return an integer, the total time required.

function queueTime(customers, n) {
  let tills = Array(n).fill(0)
  for(let i = 0; i < customers.length; i++) {
    let tillMinimum = tills.reduce((min,current) => current < min ? current : min, tills[0])
    tills[tills.indexOf(tillMinimum)] += customers[i]
  }
  return Math.max(...tills)
}

//August 6 2023
// A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.
// Arguments (Haskell)

//     First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
//     Second argument: the original string to be converted.

// Arguments (Other languages)

//     First argument (required): the original string to be converted.
//     Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.

function titleCase(title, minorWords) {
  if(title === "") return ""
  
  title = title.split(' ')
  
  if(minorWords) {
    let minorWordsArr = minorWords.toLowerCase().split(' ')
    for(let i = 0; i < title.length; i++) {
      title[i] = title[i].toLowerCase()
      if(!minorWordsArr.includes(title[i])) {
        title[i] = title[i][0].toUpperCase() + title[i].slice(1).toLowerCase()
      }
    }
  } else {
    for(let i = 0; i < title.length; i++) {
    title[i] = title[i][0].toUpperCase() + title[i].slice(1).toLowerCase()
    }
  }
  
  title[0] = title[0][0].toUpperCase() + title[0].slice(1).toLowerCase()

  return title.join(' ')
}

//August 7 2023
// In this Kata your task will be to return the count of pairs that have consecutive numbers as follows:

// pairs([1,2,5,8,-4,-3,7,6,5]) = 3
// The pairs are selected as follows [(1,2),(5,8),(-4,-3),(7,6),5]
// --the first pair is (1,2) and the numbers in the pair are consecutive; Count = 1
// --the second pair is (5,8) and are not consecutive
// --the third pair is (-4,-3), consecutive. Count = 2
// --the fourth pair is (7,6), also consecutive. Count = 3. 
// --the last digit has no pair, so we ignore.

function pairs(ar){
  let count = 0
  for(let i = 0; i < ar.length - 1; i+= 2) {
    if(ar[i] - ar[i + 1] === -1 || ar[i] - ar[i + 1] === 1) count++
  }
   return count
 };

 //August 8 2023
//  Write a function that removes every lone 9 that is inbetween 7s.

// "79712312" --> "7712312"
// "79797"    --> "777"

function sevenAte9(str) {
  let arr = str.split('').map(el => Number(el) || el)
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === 9 && arr[i-1] === 7 && arr[i+1] === 7 ) {
      arr.splice(i, 1)
    }
  }
  return arr.map(el => el.toString()).join('')
}


