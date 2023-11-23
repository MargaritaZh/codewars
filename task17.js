//Remove duplicates from list
/*Define a function that removes duplicates from an array of non negative numbers and returns it as a result.*/
function distinct(a) {
  return [...new Set(a)];
}
