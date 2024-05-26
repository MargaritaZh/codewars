// String cleaning

// Ваш начальник решил сэкономить, купив недорогую программу оптического распознавания символов для сканирования текстов старых романов в вашу базу данных. Поначалу кажется, что программа хорошо распознает слова, но вскоре вы замечаете, что она вбрасывает множество цифр в случайных местах текста.
//
// Примеры (вход -> выход)
// '! !' -> '! !'
// '123456789' -> ''
// 'This looks5 grea8t!' -> 'This looks great!'
// Ваши измученные коллеги ищут у вас решение, как взять этот беспорядочный текст и удалить все цифры. Ваша программа примет строку, очистит все числовые символы и вернет строку с интервалом и специальными символами ~#$%^&!@*():;"'.,? в целости и сохранности.

// assert.strictEqual(stringClean(""), "")
// assert.strictEqual(stringClean("! !"), "! !")
// assert.strictEqual(stringClean("123456789"), "")
// assert.strictEqual(stringClean("(E3at m2e2!!)"), "(Eat me!!)")

function stringClean(s){
    return s.replace(/\d/g, '');
}