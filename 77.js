//Hello, Name or World!
// Определите метод hello, который возвращает "Hello, Name!" для заданного имени, или говорит Hello, World!, если имя не задано (или передано как пустая строка).
//
// Предполагается, что имя является строкой и проверяется на опечатки пользователя, чтобы вернуть имя с первой заглавной буквой (Xxxx).
//
//     Примеры:
//
// * С `name` = "john" => возвращает "Hello, John!"
// * С `name` = "aliCE" => возвращается "Привет, Алиса!"
// * С `name` не задано
// или `name` = "" => возвращаем "Hello, World!"

// assert.isDefined(actualJohn, "You have to return a string instead of logging it to the console");
// assert.strictEqual(actualJohn, 'Hello, John!', "returns 'Hello, John!' when given 'johN'");
// assert.strictEqual(hello('alice'), 'Hello, Alice!', "returns 'Hello, Alice!' when given 'alice'");
// assert.strictEqual(hello(), 'Hello, World!', "returns 'Hello, World!' when name is not given");
// assert.strictEqual(hello(''), 'Hello, World!', "returns 'Hello, World!' when name is an empty string");

function hello(name) {
    if (name && name.length > 0) {
        // Если имя задано и не пустое
        const capitalized = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        return `Hello, ${capitalized}!`;
    } else {
        // Если имя не задано или пустое
        return "Hello, World!";
    }
}

