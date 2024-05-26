//Merge two sorted arrays into one

// Вам даны два отсортированных массива, оба из которых содержат только целые числа. Ваша задача - найти способ объединить их в один, отсортированный в порядке возрастания. Выполните функцию mergeArrays(arr1, arr2), где arr1 и arr2 - исходные отсортированные массивы.
//
//     Вам не нужно беспокоиться о проверке, так как arr1 и arr2 должны быть массивами с 0 или более Integer. Если и arr1, и arr2 пусты, то просто верните пустой массив.
//
//     Примечание: массивы arr1 и arr2 могут быть отсортированы в разных порядках. Также arr1 и arr2 могут содержать одинаковые целые числа. Удалите дубликаты в возвращаемом результате.
//
// Примеры (вход -> выход)
// * [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//
// * [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//
// * [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]

function mergeArrays(arr1, arr2) {
    let newArr = [...arr1, ...arr2];
    let sortedArr = newArr.slice().sort(function(a, b) {
        return a - b;
    });
    let uniqueArr = sortedArr.filter(function(value, index, self) {
        return self.indexOf(value) === index;
    });
    return uniqueArr;
}

function mergeArrays2(arr1, arr2) {
    return Array.from(new Set(arr1.concat(arr2).sort((a,b) => (a-b))));
}
// arr1.concat(arr2): Метод concat() объединяет элементы массивов arr1 и arr2 в один новый массив.
// sort((a, b) => (a - b)): Метод sort() с функцией сравнения (a, b) => (a - b) сортирует элементы объединенного массива по возрастанию.
// new Set(...): Конструктор Set создает новый объект Set, который автоматически удаляет дубликаты из переданного ему массива.
// Array.from(...): Метод from() преобразует Set обратно в массив.