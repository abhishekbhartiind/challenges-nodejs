const val = {
    penny:1,
    nickel:5,
    dime:10,
    quater:25,
    dollar:100
}
//20.47 -bring every thing in one unit

function money(total){
    let cenT = total*100;
    let re = cenT%val.dollar
    let dollar = cenT -re
    return dollar
}
console.log(money(20.47))

// --------------------------------
let str = 'i love javascript'
console.log(str.split('').reverse().join(''))

//--------------------------------

const ary = [1,2,3,4]

/* 
1 - 2+3+4(Max)
2 - 1+3+4
3 - 1+2+4
4 - 1+2+3(Min)
*/

function findMaxMin(array) {
    let min = Math.min.apply(null, array)
    let max = Math.max.apply(null, array)

    let arrSum = array.reduce((acc, item) => acc + item)
    let minSum = arrSum - max
    let maxSum = arrSum - min
    return `Max: ${maxSum} \t Min: ${minSum}`
}
console.log(findMaxMin(ary))


let x = 1234
// find length of number

function len(number){
    let numLength = 0;
    while(number != 0){
        number = Math.floor(number / 10)
        numLength++
    }
    return numLength
}
console.log(len(x))