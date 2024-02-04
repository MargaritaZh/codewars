// pick a set of first elements

// Напишите функцию для получения первого элемента (элементов) последовательности. При передаче параметра n (по умолчанию=1) будет возвращаться первый n элемент(ы) последовательности.
//Если n == 0, возвращается пустая последовательность []
// var arr = ['a', 'b', 'c', 'd', 'e'];
// first(arr) //=> ['a'];
// first(arr, 2) //=> ['a', 'b']
// first(arr, 3) //=> ['a', 'b', 'c'];
// first(arr, 0) //=> [];

// const arr = ['a', 'b', 'c', 'd', 'e'];
// assert.sameOrderedMembers(first([...arr]   ),      ['a']);
// assert.sameOrderedMembers(first([...arr], 2), ['a', 'b']);

function first(arr, n=1) {
   return arr.slice(0,n)
}