//easy logs

//Сложите два логарифма с основанием X со значениями A и B. Пример log A + log B, где основание равно X.

// Test.assertApproxEquals(logs(10, 2, 3), 0.7781512503836435);
// Test.assertApproxEquals(logs(5, 2, 3), 1.1132827525593785);
// Test.assertApproxEquals(logs(1000, 2, 3), 0.25938375012788123);

function logs(x , a, b){
    return Math.log(a * b) / Math.log(x);
}