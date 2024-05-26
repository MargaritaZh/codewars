// 113.A magician in the subway showed you a trick, he put an ice brick in a bottle to impress you. The brick's length and width are equal, forming a square; its height may be different. Just for fun and also to impress the magician and people around, you decided to calculate the brick's volume. Write a function iceBrickVolume that will accept these parameters:
//
//     radius - bottle's radius (always > 0);
// bottleLength - total bottle length (always > 0);
// rimLength - length from bottle top to brick (always < bottleLength);
// And return volume of ice brick that magician managed to put into a bottle.

// Example 1:
// radius = 1
// bottle_length = 10
// rim_length = 2
//
// volume = 16

// const assert = require('chai').assert;
//
// describe("Basic Tests", () => {
//     it("should work for basic tests", () => {
//         assert.strictEqual(iceBrickVolume(1, 10, 2), 16, "radius = 1, bottleLength = 10, rimLength = 2");
//         assert.strictEqual(iceBrickVolume(5, 30, 7), 1150, "radius = 5, bottleLength = 30, rimLength = 7");
//     });
// });
// Фокусник в метро показал вам фокус: он положил ледяной кирпич в бутылку, чтобы произвести на вас впечатление. Длина и ширина кирпича равны и образуют квадрат, а вот высота может быть разной. Просто ради интереса, а также чтобы произвести впечатление на фокусника и окружающих, вы решили вычислить объем кирпича. Напишите функцию iceBrickVolume, которая будет принимать такие параметры:
//
//     radius - радиус бутылки (всегда > 0);
// bottleLength - общая длина бутылки (всегда > 0);
// rimLength - длина от верха бутылки до кирпича (всегда < bottleLength);
// И возвращает объем ледяного кирпича, который фокуснику удалось поместить в бутылку.

function iceBrickVolume(radius, bottleLength, rimLength) {
    const innerVolume = (bottleLength - rimLength) * Math.pow(radius * 2, 2);
    const brickVolume = innerVolume / 2;
    return brickVolume;
}