// Happy Holidays fellow Code Warriors!
//     Now, Dasher! Now, Dancer! Now, Prancer, and Vixen! On, Comet! On, Cupid! On, Donder and Blitzen! That's the order Santa wanted his reindeer...right? What do you mean he wants them in order by their last names!? Looks like we need your help Code Warrior!
//
// Sort Santa's Reindeer
// // Write a function that accepts a sequence of Reindeer names, and returns a sequence with the Reindeer names sorted by their last names.
//
//     Notes:
// It's guaranteed that each string is composed of two words, separated by a single space
// In case of two identical last names, keep the original order
// Examples
// For this input:
//
//     [
//         "Dasher Tonoyan",
//         "Dancer Moore",
//         "Prancer Chua",
//         "Vixen Hall",
//         "Comet Karavani",
//         "Cupid Foroutan",
//         "Donder Jonker",
//         "Blitzen Claus"
//     ]
// You should return this output:
//
//     [
//         "Prancer Chua",
//         "Blitzen Claus",
//         "Cupid Foroutan",
//         "Vixen Hall",
//         "Donder Jonker",
//         "Comet Karavani",
//         "Dancer Moore",
//         "Dasher Tonoyan",
//     ]


// С праздником, друзья Code Warriors! Теперь, Dasher! Теперь, Танцор! А теперь, шалунья и лисица! На, Комета! Вперед, Купидон! Вперёд, Дондер и Блицен! Именно в таком порядке Санта хотел видеть своих оленей... верно? Что значит, он хочет, чтобы они шли в порядке их фамилий? Похоже, нам нужна ваша помощь Воин Кода! Сортировка оленей Санты Напишите функцию, которая принимает последовательность имен оленей и возвращает последовательность с именами оленей, отсортированных по фамилиям. Примечания: Гарантируется, что каждая строка состоит из двух слов, разделенных одним пробелом В случае двух одинаковых фамилий, сохраните первоначальный порядок Примеры

function sortReindeer(reindeerNames) {
        return reindeerNames.slice().sort((a, b) => {
                const lastNameA = a.split(' ')[1];
                const lastNameB = b.split(' ')[1];
                return lastNameA.localeCompare(lastNameB);
        });
}