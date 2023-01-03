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