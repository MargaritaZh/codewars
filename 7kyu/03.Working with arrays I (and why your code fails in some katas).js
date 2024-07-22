//Working with arrays I (and why your code fails in some katas)
//function withoutLast(arr) {
//   // Fix it
//   arr.pop(); // removes the last element
//   return arr;
// }
//В этом ката функция возвращает массив/список чисел без последнего элемента. Функция уже написана для вас, основные тесты пройдены, но случайные тесты не работают. Ваша задача - выяснить причину и исправить ее.

function withoutLast(arr) {
  // Создаем поверхностную копию массива и исключаем последний элемент
  return arr.slice(0, arr.length - 1);
}

