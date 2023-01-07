//January 1
// Very simple, given an integer or a floating-point number, find its opposite.
function opposite(number) {
    return number * -1
  }

//January 2
// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

function repeatStr (n, s) {
  return s.repeat(n)
}

//January 3
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.
function getCount(str) {
  let count = 0
  for(let i = 0; i < str.length; i++) {
    if("aeiou".includes(str[i])) count++
  }
  return count
}

//January 4 2023
// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so: 
function findNeedle(haystack) {
  for(let i = 0; i < haystack.length; i++) {
    if(haystack[i] === "needle") return `found the needle at position ${i}`
  }
}

//January 5 2023
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

export function even_or_odd(n:number):string {
  return n % 2 === 0 ? "Even" : "Odd"
}

//January 6 2023
// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

//     if x > y: 3 points (win)
//     if x < y: 0 points (loss)
//     if x = y: 1 point (tie)

// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

//     our team always plays 10 matches in the championship
//     0 <= x <= 4
//     0 <= y <= 4

function points(games) {
  let points = 0
  for(game of games) {
    let xScore = Number(game[0])
    let yScore = Number(game[2])
    if(xScore > yScore) points += 3
    if(xScore === yScore) points += 1
  }
  return points
}
