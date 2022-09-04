//September 1 2022
// Define a method/function that removes from a given array of integers all the values contained in a second array.

Array.prototype.remove_ = function(integer_list, values_list){
    return integer_list.filter(el => !values_list.includes(el))
  }

  //September 2 2022
  // This code should store "codewa.rs" as a variable called name but it's not working. Can you figure out why?

var a = "code";
var b = "wa.rs";
var name = a + b;

//September 3 2022
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending){
  return str.endsWith(ending)
 }