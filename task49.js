//Abbreviate a Two Word Name
/*Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/

function abbrevName(name) {
  let res = name[0].toUpperCase();
  for (let i=1; i<name.length;i++){
    if(name[i]===' '){
    res += '.' + name[i+1].toUpperCase();
    }
  }
  return res
}

/*
assert.strictEqual(abbrevName("Sam Harris"), "S.H");
assert.strictEqual(abbrevName("Patrick Feenan"), "P.F");
assert.strictEqual(abbrevName("Evan Cole"), "E.C");
assert.strictEqual(abbrevName("P Favuzzi"), "P.F");
assert.strictEqual(abbrevName("David Mendieta"), "D.M");*
/