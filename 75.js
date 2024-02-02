//sReallyNaN
// В последнее время я столкнулся с несколькими ошибками в коде Java/Type/Coffee-script, и я отследил, что проблема связана с глобальной функцией isNaN, которую я использовал. Я ожидал, что она будет более разборчивой, но сейчас она возвращает true для undefined.
//
//Напишите функцию isReallyNaN, которая возвращает true только в том случае, если передан аргумент, который оценивается как NaN, и возвращает false в противном случае.
//
// Любое решение приемлемо!

// Test.expect(isReallyNaN(37) === false)
// Test.expect(isReallyNaN('37') === false)
// Test.expect(isReallyNaN(NaN) === true)
// Test.expect(isReallyNaN(undefined) === false)

const isReallyNaN = (val) => {
    return Number.isNaN(val);
};
