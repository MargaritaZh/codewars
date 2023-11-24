//Enumerable Magic #20 - Cascading Subsets
/*Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:

each_cons([1,2,3,4], 2)
  #=> [[1,2], [2,3], [3,4]]

each_cons([1,2,3,4], 3)
  #=> [[1,2,3],[2,3,4]]
  */

function eachCons(array, n) {
  const r = [];
  for (let i = 0; i <= array.length - n; i++) {
    const chunk = [];
    for (let j = i; j < i + n; j++) {
      chunk.push(array[j]);
    }
    r.push(chunk);
  }

  return r;
}
