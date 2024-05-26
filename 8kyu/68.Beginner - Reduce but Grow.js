//68 Beginner - Reduce but Grow
// Если задан непустой массив целых чисел, верните результат умножения их значений по порядку. Пример:
//
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// assert.strictEqual(grow([1, 2, 3]), 6);
// assert.strictEqual(grow([4, 1, 1, 1, 4]), 16);
// assert.strictEqual(grow([2, 2, 2, 2, 2, 2]), 64);

function grow(x){
    if(x.length!==0){
        let res = 1
        for(let i=0; i< x.length; i++){
            res *=x[i]
        }
        return res
    }
}


function grow2(x){
    return x.reduce((a, b)=> a * b,1);
}