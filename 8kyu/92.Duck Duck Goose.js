// Duck Duck Goose

// Цель игры "Утка, утка, гусь" - ходить по кругу, постукивая по голове каждого игрока, пока не будет выбран один.
//
// Задача: Учитывая массив объектов Player (массив ассоциативных массивов в PHP) и индекс (основанный на 1), вернуть имя выбранного игрока (имя - свойство объектов Player, например Player.name).


// let ex_names = ["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"];
// let players = ex_names.map((n) => new Player(n));
//
//     assert.strictEqual(duckDuckGoose(players, 1),  "a");
//     assert.strictEqual(duckDuckGoose(players, 3),  "c");
//     assert.strictEqual(duckDuckGoose(players, 10), "z");
//     assert.strictEqual(duckDuckGoose(players, 20), "z");

function duckDuckGoose(players, goose) {
    let newPlayer= (goose-1)%players.length
return players[newPlayer].name
}

function duckDuckGoose2(players, goose) {

    return players[(goose-1)%players.length].name
}