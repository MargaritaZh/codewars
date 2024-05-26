//Welcome to the City

// Создайте метод, который принимает на вход имя, город и штат, чтобы поприветствовать человека. Обратите внимание, что name будет представлять собой массив, состоящий из одного или нескольких значений, которые должны быть соединены вместе с одним пробелом между каждым, а длина массива name в тестовых случаях может быть разной.
//
//     Пример:
//
// ['John', 'Smith'], 'Phoenix', 'Arizona'
// Этот пример вернет строку Hello, John Smith! Welcome to Phoenix, Arizona!

// assert.strictEqual(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'), 'Hello, John Smith! Welcome to Phoenix, Arizona!')
// assert.strictEqual(sayHello(['Franklin','Delano','Roosevelt'], 'Chicago', 'Illinois'), 'Hello, Franklin Delano Roosevelt! Welcome to Chicago, Illinois!')
// assert.strictEqual(sayHello(['Wallace','Russel','Osbourne'],'Albany','New York'), 'Hello, Wallace Russel Osbourne! Welcome to Albany, New York!')

function sayHello( name, city, state ) {
    return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`
}