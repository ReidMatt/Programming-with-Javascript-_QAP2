/*Programming With JavaScript QAP 2
 
Name: <Matthew Reid>
Date: <June 10, 2024> 8
*/

function snake(value) {
  return value
  .trim()
  .replace(/[\s.]+/g, '_')
  .toLowerCase();
}

console.log(snake('abc'));
console.log(snake(' ABC '));
console.log(snake('ABC'));
console.log(snake('A BC'));
console.log(snake(' A bC  '));
console.log(snake('A   BC'));
console.log(snake('A.BC'));
console.log(snake(' A..  B   C '));

