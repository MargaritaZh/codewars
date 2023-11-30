//Beginner - Lost Without a Map
/*Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]
*/

function maps(numbers) {
  return numbers.map((num) => num * 2);
}

function maps2(x) {
  let res = [];
  for (let i = 0; i < x.length; i++) {
    res.push(x[i] * 2);
  }
  return res;
}
