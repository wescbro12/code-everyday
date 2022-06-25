// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// cd ..

// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// function capitalize(str) {
//     const words = str.split(' ')
//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i][0].toUpperCase() + words[i].substr(1);

//     }
//     return words.join(' ')
// }
// console.log(capitalize('a short sentence'))


// function chunk(array, size) {
//     const arrChunk = []

//     while (array.length > 0) {
//         const chunkSize = array.splice(0, size)
//         arrChunk.push(chunkSize)
//     }
//     return arrChunk
// }

// console.log(chunk([1, 2, 3, 4, 5], 2))


// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
    for (let i = 0; i <= n; i++) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            console.log("fizzbuzz")
        } else if (i % 5 === 0) {
            console.log("buzz")

        } else if (i % 3 === 0) {
            console.log("fizz")
        } else {
            console.log(i)
        }

    }

}

console.log(fizzBuzz(15))