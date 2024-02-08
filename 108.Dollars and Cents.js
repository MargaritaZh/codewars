// Dollars and Cents
// Компания, в которой вы работаете, только что получила контракт на создание платежного шлюза. Чтобы помочь продвижению дела, вы вызвались создать функцию, которая будет принимать плавающие значения и возвращать сумму, отформатированную в долларах и центах.
//
// 39,99 становится $39,99
//
// Остальные члены вашей команды позаботятся о том, чтобы аргумент был продезинфицирован перед передачей в функцию, хотя вам придется позаботиться о добавлении нулей в конце строки, если они отсутствуют (хотя вам не придется беспокоиться о висящей точке).
//
// Примеры:
//
//     3 должно стать $3.00
//
// 3,1 должно стать $3,10
// Удачи! Ваша команда знает, что может на вас рассчитывать!

// Test.assertEquals(formatMoney(39.99), '$39.99', 'That\'s not formatted the way we expected.');
// });

function formatMoney(amount){
   return `$${amount.toFixed(2)}`
}