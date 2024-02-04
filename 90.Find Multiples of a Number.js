// Find Multiples of a Number

// создать программу, которая принимает значение integer и возвращает список его кратных до другого значения limit. Если limit кратен целому числу, его также следует включить в список. В функцию будут передаваться только положительные целые числа, не состоящие из 0. Предел всегда будет больше основания.
//
//Например, если переданы параметры (2, 6), функция должна вернуть [2, 4, 6], так как 2, 4 и 6 - это кратные 2 до 6.


// assert.sameOrderedMembers(findMultiples(5, 25), [5, 10, 15, 20, 25])
// assert.sameOrderedMembers(findMultiples(1, 2), [1, 2])
// assert.sameOrderedMembers(findMultiples(5, 7), [5])
// assert.sameOrderedMembers(findMultiples(4, 27), [4, 8, 12, 16, 20, 24])
// assert.sameOrderedMembers(findMultiples(11, 54), [11, 22, 33, 44])



function findMultiples(integer, limit) {
let newAr= [];
for(let i=integer;i<=limit;i++){
    if(i%integer===0){
        newAr.push(i)
    }
}
  return newAr
}

console.log(findMultiples(5, 7))