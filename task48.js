//Convert number to reversed array of digits
/*Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]
*/
function digitize(num) {
  let n = num.toString();
  let res = [];
  for (let i = n.length - 1; i >= 0; i--) {
    res.push(+n[i]); //преобразуем в цифру и push в res массив число
  }
  return res;
}

/*
assert.deepEqual(digitize(35231),[1,3,2,5,3]);
assert.deepEqual(digitize(0),[0]);
*/
