// Double Char

// Задав строку, вы должны вернуть строку, в которой каждый символ (с учетом регистра) повторяется один раз.
//
// Примеры (вход -> выход):
// * "String" -> "SSttrriinnggg"
// * "Hello World" -> "HHeelllloo WWoorrlldd"
// * "1234!_ " -> "11223344!!__ "

// Test.assertEquals(doubleChar("abcd"), "aabbccdd");
// Test.assertEquals(doubleChar("Adidas"), "AAddiiddaass");
// Test.assertEquals(doubleChar("1337"), "11333377");
// Test.assertEquals(doubleChar("illuminati"), "iilllluummiinnaattii");
// Test.assertEquals(doubleChar("123456"), "112233445566");
// Test.assertEquals(doubleChar("%^&*("), "%%^^&&**((");


function doubleChar(str) {
    return str.split("").map(e=>e+e).join("")
}

function doubleChar2(str) {
    let newStr=""
    for (let i=0;i<str.length;i++){
        newStr +=str[i]+str[i]
    }
    return newStr
}
