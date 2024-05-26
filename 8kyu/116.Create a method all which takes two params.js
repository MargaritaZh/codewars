//116. Create a method all which takes two params:
//
//     a sequence
// a function (function pointer in C)
// and returns true if the function in the params returns true for every element in the sequence. Otherwise, it should return false. If the sequence is empty, it should return true, since technically nothing failed the test.
//
//     Example
// all((1, 2, 3, 4, 5), greater_than_9) -> false
// all((1, 2, 3, 4, 5), less_than_9)    -> True

// Создайте метод all, который принимает два параметра:
//     последовательность
// функцию (указатель функции в C)
// и возвращает true, если функция, указанная в параметрах, возвращает true для каждого элемента последовательности. В противном случае он должен возвращать false. Если последовательность пуста, она должна вернуть true, так как технически ничто не прошло тест.
// describe("Tests", () => {
//     it("test", () => {
//         Test.assertEquals(all([1,2,3,4,5], function(v){return v<9}), true)
//         Test.assertEquals(all([1,2,3,4,5], function(v){return v>9}), false)
//
//     });
// });

function all( arr, fun ){
    return arr.every(fun);
}