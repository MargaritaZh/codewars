// 117 Sort and Star
// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
//
//     The returned value must be a string, and have "***" between each of its letters.
//
//     You should not remove or add elements from/to the array.

// Вам будет дан список строк. Вы должны отсортировать его по алфавиту (с учетом регистра и на основе ASCII-значений символов), а затем вернуть первое значение.
//
//     Возвращаемое значение должно быть строкой и содержать "***" между буквами.
//
//     Не следует удалять или добавлять элементы из/в массив.

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;
//
// describe("Basic tests",() =>{
//     it("Testing for fixed tests", () => {
//         assert.strictEqual(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' );
//         assert.strictEqual(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e');
//     });
// });

function twoSort(s) {
    return s.sort()[0].split('').join('***');
}
