//Day 1
// Oh no! How did this happen?! Somehow similar-looking numbers and letters have been confused in our document. Someone may have been messing around writing naughty words on a calculator. We need to get them back to normal.

// Below, find the mix-ups that have been made. Note: the confusion happened in both directions and was case-sensitive.

// '0' <-> 'O'      '5' <-> 'S'
// '1' <-> 'I'      '6' <-> 'G'
// '2' <-> 'Z'      '7' <-> 'L'
// '3' <-> 'E'      '8' <-> 'B'
// '4' <-> 'h'      '9' <-> 'q'
// As an example, here is how a string looks before and after the characters are fixed:

// "PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770." 
// // implement fix function -> 
// "PRO-TIP #498: IT'S NICE TO SAY HELLO."
// Please create a function that will fix a given string of this mistake before incalculable damage can be done!

function untangle(str) {
    const values = {
        '0': 'O',
        '1': 'I',
        '2': 'Z',
        '3': 'E',
        '4': 'h',
        '5': 'S',
        '6': 'G',
        '7': 'L',
        '8': 'B',
        '9': 'q',
    }
    let res = str.split('').map((el,i,arr) => {
        if(values[el]) {
            return values[el]
        }else if(Object.values(values).includes(el)) {
            return Object.keys(values).find(key => values[key] === el)
        }else {
            return el
        }
    }).join('')
    return res
}

console.log(untangle('PR0-T1P #hqB: 1T\'5 N1C3 T0 5AY H3770'))