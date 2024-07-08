/*Programming With JavaScript QAP 2
 
Name: <Matthew Reid>
Date: <June 10, 2024> 
*/

function pureBool(value) {

  const trueValues = [
    'yes', 'y', 'oui', 'o', 't', 'true', 'vrai', 'v', '1'
  ];

  const falseValues = [
    'no', 'n', 'non', 'f', 'false', 'faux', '0', 
  ];

  if (typeof value === 'boolean') {
    return value;
  }

  let stringValue = String(value).trim().toLowerCase();

  if (trueValues.includes(stringValue) || (!isNaN(stringValue) && Number(stringValue) >0)) {
    return true; 
  }

  if (falseValues.includes(stringValue) || (!isNaN(stringValue) && Number(stringValue)>0)) {
  return false;
  }

throw new Error('invalid value');
}

function every(...args) {
  try {
    for (let arg of args) {
      if (!pureBool(arg)) {
        return false;
      }
    }
    return true;
  } catch (e) {
    return false;
  }
}

function any(...args) {
  try {
    for (let arg of args) {
      if(pureBool(arg)) {
        return true;
      }
    }
    return false;
  } catch (e) {
    return false;
  }
}

function none(...args) {
  try {
    for (let arg of args) {
      if (pureBool(arg)) {
        return false;
      }
    }
    return true;
  } catch (e) {
    return false;
  }
}

console.log(every('Y','yes', 1));
console.log(every('Y','no', 1));
console.log(any('Y', 'no', '-1'));
console.log(any('no', 'invalid', '-1'));
console.log(none('no', 'invalid', '-1'));
console.log(none('Y', 'invalid', '1'));


