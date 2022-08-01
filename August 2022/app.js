//August 1 2022
// Alex is transitioning from website design to coding and wants to sharpen his skills with CodeWars.
// He can do ten kata in an hour, but when he makes a mistake, he must do pushups. These pushups really tire poor Alex out, so every time he does them they take twice as long. His first set of redemption pushups takes 5 minutes. Create a function, alexMistakes, that takes two arguments: the number of kata he needs to complete, and the time in minutes he has to complete them. Your function should return how many mistakes Alex can afford to make.

function alexMistakes(numberOfKata, timeLimit){
    let timeAvailableToMessUp = timeLimit - (numberOfKata * 6)
    let mistakeTime = 5
    let numOfMistakes = 0
    let totalTime = 0
    console.log(`# of Kata: ${numberOfKata}, Time limit: ${timeLimit}`)
    console.log(`Time available to mess up: ${timeAvailableToMessUp}`)
    while(totalTime <= timeAvailableToMessUp) {
      totalTime += mistakeTime
      mistakeTime = (mistakeTime * 2)
      console.log(`Total time spent doing pushups: ${totalTime}`)
      numOfMistakes++
    }
    return numOfMistakes-1
    //5, 10, 20, 40, 80
    //5, 15, 35, 75
  }