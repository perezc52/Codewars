//November 4 2022
//Making my own factorial recursive function

function factorial(num) {
    if(num === 1) {
        return
    }else {
        return num * factorial(num-1)
    }
}

console.log(factorial(5))

//November 13 2022
// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.

// For example:

// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
// checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0

function checkExam(array1, array2) {
    let score = 0
    for(let i = 0; i < array1.length; i++) {
      if(array1[i] === array2[i]) {
        score += 4
      }
      if(array2[i] === "") {
        continue
      }
      if(array1[i] !== array2[i]) {
        score -= 1
      }
    }
    return score < 0 ? 0 : score
  }

  //November 14 2022
  function greeting(name) {
    let greeting
    const date = new Date()
    const hours = date.getHours()
    if(hours >= 4 && hours < 12) {
        greeting = 'morning'
    }else if(hours >= 12 && hours < 18 ) {
        greeting = 'afternoon'
    }else if(hours <= 18 && hours < 20) {
        greeting = 'evening'
    }else (
        greeting = 'night'
    )
    console.log(`Good ${greeting}, ${name}`)
}

greeting("Bob")

//November 15 2022
