// Name on billboard

// Вы можете напечатать свое имя на рекламном щите. Узнайте, сколько это будет стоить. Цена каждого персонажа по умолчанию составляет 30 фунтов стерлингов, но она может измениться, если вам дадут не 1, а 2 параметра (для Java всегда 2).
//
// Вы не можете использовать оператор умножения "*".
//
// Если вас зовут Чон Хо Аристотелис, объявление будет стоить 600 фунтов стерлингов. 20 букв * 30 = 600 (пробел считается за символ).

// Test.assertEquals(billboard("Jeong-Ho Aristotelis"), 600);
// Test.assertEquals(billboard("Abishai Charalampos"), 570);
// Test.assertEquals(billboard("Idwal Augustin"), 420);
// Test.assertEquals(billboard("Hadufuns John",20), 260);

function billboard(name, price = 30) {
    let cost = 0;
    for (let i = 0; i < name.length; i++) {
        cost = cost + price;
    }
    return cost;
}

function billboard2(name, price = 30) {
    return name.split('').reduce((sum, letter) => sum + price, 0);
}
