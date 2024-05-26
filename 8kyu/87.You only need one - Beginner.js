// You only need one - Beginner
// Вам будет предоставлен массив a и значение x. Все, что вам нужно сделать, - это проверить, содержит ли предоставленный массив это значение.
//
//Массив может содержать числа или строки. X может быть любым.
//
//Верните true, если массив содержит значение, false - если нет.

// assert.strictEqual(check([66, 101], 66), true);
// assert.strictEqual(check([101, 45, 75, 105, 99, 107], 107), true);
// assert.strictEqual(check(['t', 'e', 's', 't'], 'e'), true);
// assert.strictEqual(check(['what', 'a', 'great', 'kata'], 'kat'), false);

function check(a, x) {
    return  a.includes(x)
}

