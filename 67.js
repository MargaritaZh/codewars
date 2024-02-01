//Array plus array
// Я новичок в кодировании и сейчас я хочу получить сумму двух массивов... Точнее, сумму всех их элементов. Буду благодарен за помощь.
//
//     P.S. Каждый массив содержит только целые числа. Выходные данные тоже являются числами.
// assert.strictEqual(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
// assert.strictEqual(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
// assert.strictEqual(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
// assert.strictEqual(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);


function arrayPlusArray(arr1, arr2) {
    const combinedArray = [...arr1, ...arr2];
    const sum = combinedArray.reduce((acc, num) => acc + num, 0);
    return sum;
}