//Swap Values

// Я хотел бы иметь возможность передавать массив с двумя элементами в функцию swapValues, чтобы поменять значения местами. Однако, похоже, что значения не меняются.
//Можете ли вы понять, что здесь не так?
// function swapValues() {
//     var args = Array.prototype.slice.call(arguments);
//     var temp = args[0];
//     args[0] = args[1];
//
//     args[1] = temp;
// }

function swapValues(arr) {
    // var args = Array.prototype.slice.call(arguments);
    var temp = arr[0];
    arr[0] = arr[1];

    arr[1] = temp;
}

function swapValues2() {
    return arguments[0].reverse();
}