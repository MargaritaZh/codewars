// Find out whether the shape is a cube

// Чтобы найти объем (в сантиметрах кубических) кубоида, воспользуйтесь формулой:
// объем = длина * ширина * высота
// Но кто-то забыл вести правильные записи, поэтому у нас есть только объем и длина одной стороны!
// Вам предстоит выяснить, имеет ли кубоид равные стороны (= является ли он кубом).
// Верните true, если у кубоида могут быть равные стороны, верните false в противном случае.
// Возвращается false и для недопустимых чисел (например, объем или сторона меньше или равна 0).
// Примечание: сторона будет целым числом
// Test.assertEquals(cubeChecker(56.3, 1), false);
// Test.assertEquals(cubeChecker(-1, 2), false);
// Test.assertEquals(cubeChecker(8, 3), false);
// Test.assertEquals(cubeChecker(8, 2), true);
// Test.assertEquals(cubeChecker(-8,-2), false);
// Test.assertEquals(cubeChecker(0, 0), false);
// Test.assertEquals(cubeChecker(1, 5),  false);
// Test.assertEquals(cubeChecker(125, 5), true);
// Test.assertEquals(cubeChecker(125,-5), false);

var cubeChecker = function(volume, side){
    if (volume <= 0 || side <= 0) {
        return false;
    }

    const calculatedVolume = side ** 3;

    return calculatedVolume === volume;
};
