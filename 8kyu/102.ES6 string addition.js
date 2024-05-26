// ES6 string addition

// Легко соединить две строки, например, string1 + string2.
//
// Другой способ получить желаемый результат - string1.concat(string2)
//
// В ES6 появился еще один способ соединения строк. Ваша задача - выяснить, что это такое, и написать функцию, которая будет складывать две строки вместе, при этом между ними должен быть пробел.
//
// + , .concat() и .join() не будут разрешены в этом упражнении. Я также удалил некоторые другие методы, которые можно использовать для обмана!

//
// assert.strictEqual(joinStrings('string1', 'string2'), 'string1 string2');
// assert.strictEqual(joinStrings('testing', 'testing'), 'testing testing');
// assert.strictEqual(joinStrings(134, 234), '134 234');


function joinStrings(string1, string2){
    return `${string1} ${string2}`
}
        
