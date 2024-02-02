//Correct the mistakes of the character recognition software
// Программы распознавания символов широко используются для оцифровки печатных текстов. Таким образом, тексты можно редактировать, искать и хранить на компьютере.
//При оцифровке документов (особенно старых, написанных на пишущей машинке) программы распознавания символов часто допускают ошибки.
//Ваша задача - исправить ошибки в оцифрованном тексте. Вам предстоит справиться только со следующими ошибками:
//
// S неправильно интерпретируется как 5
// O неправильно истолковано как 0
// I ошибочно интерпретируется как 1
// Тестовые примеры содержат числа только по ошибке.

// assert.strictEqual(correct("L0ND0N"),"LONDON");
// assert.strictEqual(correct("DUBL1N"),"DUBLIN");
// assert.strictEqual(correct("51NGAP0RE"),"SINGAPORE");

// assert.strictEqual(correct("BUDAPE5T"),"BUDAPEST");
// assert.strictEqual(correct("PAR15"),"PARIS");

correct = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')

function correct2(string) {
    const corrections = {
        '5': 'S',
        '0': 'O',
        '1': 'I'
    };
    let correctedString = '';
    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        correctedString += corrections[char] || char;
    }
    return correctedString;
}