// Sort an array by value and index
// Your task is to sort an array of integer numbers by the product of the value and the index of the positions.
//
//     For sorting the index starts at 1, NOT at 0!
//     The sorting has to be ascending.
//     The array will never be null and will always contain numbers.
//
//     Example:
//
// Input: 23, 2, 3, 4, 5
// Product of value and index:
//     23 => 23 * 1 = 23  -> Output-Pos 4
// 2 =>  2 * 2 = 4   -> Output-Pos 1
// 3 =>  3 * 3 = 9   -> Output-Pos 2
// 4 =>  4 * 4 = 16  -> Output-Pos 3
// 5 =>  5 * 5 = 25  -> Output-Pos 5
//
// Output: 2, 3, 4, 23, 5

//
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;
//
// describe("Kata Tests", function(){
//     it("Example Tests", function(){
//         var actual = sortByValueAndIndex([ 1, 2, 3, 4, 5 ]);
//         var expected = [ 1, 2, 3, 4, 5 ];
//         assert.deepEqual(actual, expected);
//
//         actual = sortByValueAndIndex([ 23, 2, 3, 4, 5 ]);
//         expected = [ 2, 3, 4, 23, 5 ];
//         assert.deepEqual(actual, expected);
//
//         actual = sortByValueAndIndex([ 26, 2, 3, 4, 5 ]);
//         expected = [ 2, 3, 4, 5, 26 ];
//         assert.deepEqual(actual, expected);
//
//         actual = sortByValueAndIndex([ 9, 5, 1, 4, 3 ]);
//         expected = [ 1, 9, 5, 3, 4 ];
//         assert.deepEqual(actual, expected);
//     });
// });

// Сортировка массива по значению и индексу
// Ваша задача - отсортировать массив целых чисел по произведению значения и индекса позиций.
//
//     Для сортировки индекс начинается с 1, а не с 0!
//     Сортировка должна быть по возрастанию.
//     Массив никогда не будет нулевым и всегда будет содержать числа.


 // array.indexOf(a) и array.indexOf(b) возвращают индекс первого вхождения элемента в массиве. Это означает, что если в массиве есть повторяющиеся значения, то у них будет один и тот же индекс, и сортировка будет некорректной.
//


function sortByValueAndIndex(array) {
    const sortedArray = array.map((value, index) => ({
        value,
        index,
        product: value * (index + 1)
    }));

    sortedArray.sort((a, b) => a.product - b.product);

    return sortedArray.map(obj => obj.value);
}

console.log(sortByValueAndIndex([ 23, 2, 3, 4, 5 ]))//[ 2, 3, 4, 23, 5 ]
