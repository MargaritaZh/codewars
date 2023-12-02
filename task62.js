//Calculate average
/*Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.


    assert.strictEqual(findAverage([1,1,1]), 1);
    assert.strictEqual(findAverage([1,2,3]), 2);
    assert.strictEqual(findAverage([1,2,3,4]), 2.5);

*/
function findAverage(array) {
  if (array.length === 0) return 0;

  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}
