/*Programming With JavaScript QAP 2
 
Name: <Matthew Reid>
Date: <June 10, 2024> 
*/

function toDateString(value) {
  if (!(value instanceof Date) || isNaN(value.getTime())) {
    throw new Error('Invalid Date object');
  }

  const year = value.getFullYear();
  const month = (value.getMonth() + 1).toString().padStart(2, '0');
  const day = value.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
}

try {
console.log(toDateString(new Date(2021, 0, 29)));
console.log(toDateString(new Date(2021, 8, 9)));
console.log(toDateString(new Date('invalid date')));
} catch (error) {
  console.error
}
 
