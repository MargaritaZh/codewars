// Sum of differences in array
// Ваша задача - просуммировать разности между последовательными парами в массиве в порядке убывания.
//
//     Пример
//     [2, 1, 10] --> 9
// В порядке убывания: [10, 2, 1]
//
// Сумма: (10 - 2) + (2 - 1) = 8 + 1 = 9
//
// Если массив пуст или в нем только один элемент, результат должен быть равен 0.


    // assert.strictEqual(sumOfDifferences([1, 2, 10]), 9);
    // assert.strictEqual(sumOfDifferences([-3, -2, -1]), 2);


function sumOfDifferences(arr) {
    if (arr.length <= 1) {
        return 0;
    }

    arr.sort(function(a, b) {
        return b - a;
    });

    let sum = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        sum += arr[i] - arr[i + 1];
    }

    return sum;
}

