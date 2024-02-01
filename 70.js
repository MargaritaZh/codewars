//Removing Elements

//Возьмите массив и удалите из него каждый второй элемент. Всегда сохраняйте первый элемент и начинайте удаление со следующего элемента.
//
// Пример:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...].
//
// Ни один из массивов не будет пустым, поэтому об этом можно не беспокоиться!

// assert.deepEqual(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']),['Hello', 'Hello Again']);
// assert.deepEqual(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),[1, 3, 5, 7, 9]);
// assert.deepEqual(removeEveryOther([[1, 2]]), [[1, 2]]);
// assert.deepEqual(removeEveryOther([['Goodbye'], {'Great': 'Job'}]),[['Goodbye']]);

function removeEveryOther(arr){

    return arr.filter((element, index) => index % 2 === 0);
}
