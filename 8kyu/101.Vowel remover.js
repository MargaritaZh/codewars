// Vowel remover

// Создайте функцию shortcut для удаления строчных гласных (a, e, i, o, u) в заданной строке.

// Примеры
// "hello" --> "hll"
// "codewars" --> "cdwrs"
// "goodbye" --> "gdby"
// "HELLO" --> "HELLO"
// не беспокойтесь о прописных гласных
// y не считается гласной для этого ката


function shortcut(string){
    return string.replace(/[aeiou]/g,'')
}


function shortcut(string) {
    const vowels = ["a", "e", "i", "o", "u"];
    let newStr = "";

    for (let i = 0; i < string.length; i++) {
        const char = string[i];

        if (!vowels.includes(char)) {
            newStr += char;
        }
    }

    return newStr;
}

