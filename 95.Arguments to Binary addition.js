// Arguments to Binary addition

// Заданный массив складывает все числовые элементы и возвращает двоичный эквивалент этой суммы; чтобы сделать код пуленепробиваемым, все, что не является числом, должно быть добавлено как 0, поскольку оно не может быть сложено.
//
// Если ваш язык может работать с двоичными числами с плавающей запятой, предположим, что массив не будет содержать плавающих или двойных чисел.
//
// arr2bin([1,2]) == '11'
// arr2bin([1,2,'a']) == '11'
// arr2bin([]) == '0'
//
// ПРИМЕЧАНИЕ: NaN - это тоже число в javascript для десятичной, двоичной и n-ричной системы счисления.

// assert.strictEqual(actual, "11")
// assert.strictEqual(arr2bin([1,2,3,4,5]), "1111")
// assert.strictEqual(arr2bin([1,10,100,1000]), "10001010111")
// assert.strictEqual(arr2bin([null]), "0")
// assert.strictEqual(arr2bin([true,true,false,15]),"1111")

function arr2bin(arr){
    return arr.reduce((x,cur)=> x +  (typeof cur=="number"? cur: 0), 0).toString(2)
}

function arr2bin2(arr){
    let sum=0
    for (let i=0; i<arr.length;i++){
        if(typeof arr[i]!=="number"){
            arr[i]=0
        }
        sum+=arr[i]
    }
return sum.toString(2)
}
console.log(arr2bin([1,2,3,4,5]))
