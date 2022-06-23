//Plus-minus
// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
// arr=[-4,3,-9,0,4,1]
// function plusMinus(arr) {

//     let posResult = []
//     let negResult = []
//     let zerResult = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             posResult.push(arr[i])
//         } else if (arr[i] < 0) {
//             negResult.push(arr[i])
//         } else {
//             zerResult.push(arr[i])
//         }

//     }
//     const posLength = posResult.length / arr.length
//     const negLength = negResult.length / arr.length
//     const zerLength = zerResult.length / arr.length
//     console.log(posLength.toFixed(6) + "\n" + negLength.toFixed(6) + "\n" + zerLength.toFixed(6))


// }

// function main() {
//     const n = parseInt(readLine().trim(), 10);

//     const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

//     plusMinus(arr);
// }

//Time-converter

// Given a time in 12 -hour AM / PM format, convert it to military(24 - hour) time.

//     Note: - 12: 00: 00AM on a 12 - hour clock is 00: 00: 00 on a 24 - hour clock.
// - 12: 00: 00PM on a 12 - hour clock is 12: 00: 00 on a 24 - hour clock.

function timeConversion(s) {
    // Write your code here
    const arr = s.split('')
    arr.pop()
    arr.pop()
    const hourArr = [arr[0], arr[1]]
    let hour = parseInt(hourArr.join(''))
    let result = arr.join('')
    if (s.includes('PM')) {
        if (hour !== 12) {
            hour += 12
        }
        let hourStr = hour.toString().split('')
        console.log(hourStr)
        arr.shift()
        arr.shift()
        arr.unshift(hourStr[1])
        arr.unshift(hourStr[0])
        result = arr.join('')
        console.log(result)

    } else if (s.includes('AM') && hour === 12) {
        hour -= 12
        let hourStr = hour.toString().split('')
        hourStr.push('0')
        console.log(hourStr)
        arr.shift()
        arr.shift()
        arr.unshift(hourStr[1])
        arr.unshift(hourStr[0])
        result = arr.join('')
        console.log(result)

    }
    return result
}