//Plus-minus
/*
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    //find # of each intergers are in each array
    // loop through arr and see if # is positive, neg and 0
    let posResult = []
    let negResult = []
    let zerResult = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            posResult.push(arr[i])
        } else if (arr[i] < 0) {
            negResult.push(arr[i])
        } else {
            zerResult.push(arr[i])
        }

    }
    const posLength = posResult.length / arr.length
    const negLength = negResult.length / arr.length
    const zerLength = zerResult.length / arr.length
    console.log(posLength.toFixed(6) + "\n" + negLength.toFixed(6) + "\n" + zerLength.toFixed(6))


}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
* /