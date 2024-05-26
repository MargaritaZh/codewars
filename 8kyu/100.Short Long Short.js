//Short Long Short

// сли даны 2 строки, a и b, верните строку вида short+long+short, где более короткая строка находится снаружи, а более длинная - внутри. Строки не будут одинаковой длины, но они могут быть пустыми (нулевой длины).
//
// Подсказка для пользователей R:
//
//Длина строки не всегда совпадает с количеством символов

function solution(a, b){
    return a.length>b.length? b+a+b:a+b+a
}




Test.assertEquals(solution('45', '1'), '1451');
Test.assertEquals(solution('13', '200'), '1320013');
Test.assertEquals(solution('Soon', 'Me'), 'MeSoonMe');
Test.assertEquals(solution('U', 'False'), 'UFalseU');