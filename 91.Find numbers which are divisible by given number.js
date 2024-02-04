// Find numbers which are divisible by given number

// Заполните функцию, которая принимает два аргумента и возвращает все числа, которые делятся на заданный делитель. Первый аргумент - массив чисел, второй - делитель.

// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

// Test.assertDeepEquals(divisibleBy([1,2,3,4,5,6], 2), [2,4,6]);
// Test.assertDeepEquals(divisibleBy([1,2,3,4,5,6], 3), [3,6]);
// Test.assertDeepEquals(divisibleBy([0,1,2,3,4,5,6], 4), [0,4]);
// Test.assertDeepEquals(divisibleBy([0], 4), [0]);
// Test.assertDeepEquals(divisibleBy([1,3,5], 2), []);


function divisibleBy(numbers, divisor){
    return numbers.filter(e=>e%divisor===0)
}


function divisibleBy2(numbers, divisor){
    let newAr=[]
    for (let i=0; i<numbers.length;i++){
        if(numbers[i]%divisor===0){
            newAr.push(numbers[i])
        }
    }
return newAr
}
console.log(divisibleBy([1,3,5], 2))

