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