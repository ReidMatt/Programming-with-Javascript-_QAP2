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

console.log(pureBool('Yes'));
console.log(pureBool('no'));
console.log(pureBool('true'));
console.log(pureBool('false'));
console.log(pureBool('1'));
console.log(pureBool('0'));
console.log(pureBool('2'));
console.log(pureBool('-1'));
console.log(pureBool('vrai'));
console.log(pureBool('faux'));

try {
  console.log(kpureBool('maybe'));
} catch (e) {
  console.error(e.message);
}
