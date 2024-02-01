// Sum without highest and lowest number
// Суммировать все числа заданного массива ( cq. list ), кроме самого высокого и самого низкого элемента (по значению, а не по индексу!).
//
// Наибольший или наименьший элемент соответственно является единственным элементом на каждом краю, даже если их несколько с одинаковым значением.
//     Не забывайте о проверке вводимых данных.
//
//     Пример
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Валидация ввода
// Если вместо массива задано пустое значение ( null, None, Nothing и т. д.), или заданный массив является пустым списком или списком, содержащим только 1 элемент, возвращается 0.

// assert.strictEqual( sumArray(null)                     , 0 );
// assert.strictEqual( sumArray([ ])                      , 0 );
// assert.strictEqual( sumArray([ 3 ])                    , 0 );
// assert.strictEqual( sumArray([ 3, 5 ])                 , 0 );
// assert.strictEqual( sumArray([ 6, 2, 1, 8, 10 ])       , 16 );
// assert.strictEqual( sumArray([ 0, 1, 6, 10, 10 ])      , 17 );
// assert.strictEqual( sumArray([ -6, -20, -1, -10, -12 ]), -28 );
// assert.strictEqual( sumArray([ -6, 20, -1, 10, -12 ])  , 3 );
function sumArray(array) {
    if (array === null || array === undefined || array.length <= 1) {
        return 0;
    }

    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    let maxvalue = Math.max(...array);
    let minvalue = Math.min(...array);

    let res = sum - maxvalue - minvalue;
    return res;
}


console.log(sumArray([0, 1, 6, 10, 10]));