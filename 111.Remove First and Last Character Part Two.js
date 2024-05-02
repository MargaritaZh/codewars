// Remove First and Last Character Part Two

// Напишите функцию, которая возвращает новую строку, содержащую те же последовательности символов, кроме первой и последней, но на этот раз разделенные пробелами.
//
//     Если входная строка пуста или удаление первого и последнего элементов приведет к тому, что результирующая строка окажется пустой, верните пустое значение (в примерах ниже оно представлено как общее значение NULL).
//
// Примеры
// "1,2,3" => "2"
// "1,2,3,4" => "2 3"
// "1,2,3,4,5" => "2 3 4"

// test('', null);
// test('1', null);
// test('A1,B2', null);
// test('1,2,3', '2');
// test('1,2,3,4', '2 3');
// test('A1,B2,C3,D4,E5', 'B2 C3 D4');
// test('A,1,23,456,78,9,Z', '1 23 456 78 9');

function array(str) {
    let arr = str.split(",");
    if (arr.length <= 2) {
        return null;
    }
    arr.shift();
    arr.pop();
    return arr.join(" ");
}

