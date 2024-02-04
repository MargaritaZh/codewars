// Template Strings

// Строки-шаблоны, эта ката в основном направлена на новое обновление JS ES6, вводящее строки-шаблоны
// Задание
// Ваша задача - вернуть правильную строку, используя функцию шаблонных строк.
//     Вход
// Две строки, валидация не требуется.

// doTest('Animals', 'Good', 'Animals are Good', 'templateStrings(\'Animals\', \'Good\')')
// doTest('You', 'special', 'You are special', 'templateStrings(\'You\', \'special\')')
// doTest('lives', 'frozen', 'lives are frozen', 'templateStrings(\'lives\', \'frozen\')')



var templateStrings = function(noun, adjective) {
    return `${noun} are ${adjective}`
}