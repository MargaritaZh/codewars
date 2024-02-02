// Well of Ideas - Easy Version
//На каждую хорошую идею ката приходится несколько плохих!
// В этом ката вам нужно проверить предоставленный массив (x) на наличие хороших идей 'good' и плохих идей 'bad'. Если есть одна или две хорошие идеи, верните "Опубликовать!", если их больше двух, верните "Чую серию!". Если хороших идей нет, как это часто бывает, верните 'Fail!'.
// it("Testing for fixed tests", () => {
//     assert.strictEqual(well(['bad', 'bad', 'bad']), 'Fail!');
//     assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
//     assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!');
function well(x) {
    const goodIdeas = x.filter(idea => idea === 'good').length;
    if (goodIdeas === 0) {
        return 'Fail!';
    } else if (goodIdeas <= 2) {
        return 'Publish!';
    } else {
        return 'I smell a series!';
    }
}
function well2(x){
    const arrayGoodIdea = x.filter((elem)=> elem==="good").length;
    if(arrayGoodIdea===0) return 'Fail!'
    if(arrayGoodIdea<=2) return  'Publish!'
    if(arrayGoodIdea>2) return 'I smell a series!'
}
// В этом решении мы сначала используем метод filter(), чтобы отфильтровать элементы массива x, равные строке 'good'. Затем мы считаем количество найденных хороших идей и сохраняем его в переменную goodIdeas.
//     После этого мы используем условные операторы для определения, какую строку вернуть в зависимости от количества хороших идей:
//     Если количество хороших идей равно 0, возвращаем 'Fail!'.
//     Если количество хороших идей меньше или равно 2, возвращаем 'Publish!'.
//     Если количество хороших идей больше 2, возвращаем 'I smell a series!'.