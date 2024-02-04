//Take an Arrow to the knee, Functionally

// Вам будет предоставлен массив чисел, которые можно использовать с помощью метода String.fromCharCode() (JS), для преобразования числа в символ. Рекомендуется использовать массив чисел и преобразовывать каждое число в соответствующий символ ascii.
//     Примеры
// Вот примеры преобразования числа в символ ascii:
// Javascript => String.fromCharCode(97) // a

// Test.assertEquals(ArrowFunc([84,101,115,116]), 'Test', 'Convert those numbers to letters')
// Test.assertEquals(ArrowFunc([70,85,83,32,82,79,72,32,68,65,72]), 'FUS ROH DAH', 'Keep it up!')


var ArrowFunc = function(arr) {
    return arr.map( e=> String.fromCharCode(e)).join(''); //Complete this function
}