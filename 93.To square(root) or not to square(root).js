// To square(root) or not to square(root)

// Напишите метод, который будет получать в качестве параметра целочисленный массив и обрабатывать каждое число из этого массива.
//
// Верните новый массив, обработав каждое число из входного массива следующим образом:
//  Если число имеет целочисленный квадратный корень, извлеките его, в противном случае возведите число в квадрат.
//
// Пример
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// Примечания
// Входной массив всегда будет содержать только положительные числа и никогда не будет пустым или нулевым.


function squareOrSquareRoot(array) {
    return array.map(el=>Math.sqrt(el)%1===0? Math.sqrt(el): el*el)
}


function squareOrSquareRoot2(array) {
    let newAr=[]
    for(let i=0;i<array.length;i++){
        if(Math.sqrt(array[i])=== Math.floor(Math.sqrt(array[i]))){
            newAr.push(Math.sqrt(array[i]))
        } else {
            newAr.push(Math.pow(array[i], 2))
        }
    }
    return newAr
}

console.log(squareOrSquareRoot([4,3,9,7,2,1]))

