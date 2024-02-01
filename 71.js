//Is the string uppercase?

// Является ли строка заглавной?
//     Задание
//     Создайте метод для проверки того, является ли строка ALL CAPS.
//
// Примеры (ввод -> вывод)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True
// В этом Ката считается, что строка находится в ALL CAPS, если она не содержит ни одной строчной буквы, поэтому любая строка, не содержащая ни одной буквы, тривиально считается находящейся в ALL CAPS.
//
// assert.strictEqual('#LoveWINS'.isUpperCase(), false, '#LoveWINS is not upper case');
// assert.strictEqual('#LOVEWINs'.isUpperCase(), false, '#LOVEWINs is not upper case');
// assert.strictEqual('#lOVEWINS'.isUpperCase(), false, '#lOVEWINS is not upper case');
// assert.strictEqual('#LOVEWINS'.isUpperCase(), true, '#LOVEWINS is upper case');

String.prototype.isUpperCase = function() {
    return this.valueOf() === this.toUpperCase();
};

