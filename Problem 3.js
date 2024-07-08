/*Programming With JavaScript QAP 2
 
Name: <Matthew Reid>
Date: <June 10, 2024> 
*/

function parseDateString(value) {

  if (typeof value !== 'string') {
    throw new Error('Input must be a string');
  }
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

  if(!dateRegex.test(value)) {
    throw new Error('Date string must be in the format YYYY-MM-DD');
  }

  const [year, month, day] = value.split('-').map(Number);

  if (year < 1000 || year > 9999) {
    throw new Error('Year must be a 4-digit number');
  }

  if (month < 1 || month > 12) {
      throw new Error('Month must be between 01 and 12');
  }

  if (day < 1 || day > 31) {
      throw new Error('Day must be a 01 and 31');
  }

  const date = new Date();
  date.setFullYear(year);
  date.setMonth(month  -1);
  date.setDate(day);

  return date;
}
  console.log(parseDateString('2021-01-01'));
  console.log(parseDateString('2021-09-29'));
  console.log(parseDateString('01-01-01'));
  console.log(parseDateString('2021-1-01')); 
  console.log(parseDateString('2021-01-1')); 
