//04 Even numbers in an array
// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.
//

// Если задан массив чисел, верните новый массив длины number, содержащий последние четные числа из исходного массива (в том же порядке). Исходный массив будет не пуст и будет содержать не менее "количества" четных чисел.
// //     For example:
//
//     ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]



const evenNumbers = (array, number) => array.filter(item => item % 2 === 0).slice(-number);
