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