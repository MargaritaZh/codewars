// Get number from string

// Напишите функцию, которая удаляет из строки все нецифровые символы и разбирает оставшуюся строку на числа. Например: "hell5o wor6ld" -> 56

// Test.assertSimilar(getNumberFromString("1"), 1);
// Test.assertSimilar(getNumberFromString("123"), 123);
// Test.assertSimilar(getNumberFromString("this is number: 7"), 7);

function getNumberFromString(s) {
    return Number(s.replace(/\D/g, ""));
}