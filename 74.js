//Sum Mixed Array
// учитывая массив целых чисел в виде строк и чисел, верните сумму значений массива, как если бы все они были числами.
// Верните ответ в виде числа.


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
