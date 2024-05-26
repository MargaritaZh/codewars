// Exclamation marks series #1: Remove an exclamation mark from the end of string

// Удаление восклицательного знака из конца строки. Для начинающего ката можно считать, что входные данные всегда являются строкой, проверять это не нужно.
//
//     Примеры
// "Привет!" ---> "Привет"
// "Привет!!!" ---> "Привет!!!"
// "!Hi" ---> "!Hi"
// "!Hi!" ---> "!Hi"
// "Привет! Привет!" ---> "Привет! Привет"
// "Hi" ---> "Hi"

function remove(s) {
    return s.endsWith('!') ? s.slice(0, -1) : s;
}
const remove2 = s => s.replace(/!$/, '');

function remove3 (string) {
    if(string[string.length-1]==="!"){
        return string.slice(0,-1);
    } else{
        return string;
    }

}