// Reversed Words

// Допишите решение так, чтобы оно меняло местами все слова в переданной строке.
//
// Слова отделяются друг от друга ровно одним пробелом, и нет никаких ведущих или завершающих пробелов.

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

// assert.strictEqual(reverseWords("hello world!"                 ),  "world! hello")
// assert.strictEqual(reverseWords("yoda doesn't speak like this" ),  "this like speak doesn't yoda")
// assert.strictEqual(reverseWords("foobar"                       ),  "foobar")
// assert.strictEqual(reverseWords("kata editor"                  ),  "editor kata")
// assert.strictEqual(reverseWords("row row row your boat"        ),  "boat your row row row")
// assert.strictEqual(reverseWords(""                             ),  "")


function reverseWords(str){
    return str.split(" ").reverse().join(" "); // reverse those words
}