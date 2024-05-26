//Sum Mixed Array
// учитывая массив целых чисел в виде строк и чисел, верните сумму значений массива, как если бы все они были числами.
// Верните ответ в виде числа.
// assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
// assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42);
// assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41);

function sumMix(x){
    return x.map(a => +a).reduce((a, b) => a + b);
}


function sumMix2(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let element = parseFloat(arr[i]);
        if (!isNaN(element)) {
            sum += element;
        }
    }
    return sum;
}
