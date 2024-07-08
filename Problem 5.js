/*Programming With JavaScript QAP 2
 
Name: <Matthew Reid>
Date: <June 10, 2024> 
*/

function normalizeCoord(value) {

  value = value.replace(/[\]\s]/g, '');

  let parts = value.split(',');

  let lat = parseFloat(parts[0]);
  let lng = parseFloat(parts[1]);

  if (lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180) {

    return `(${lat}, ${lng})`;
  }

    lat = parseFloat(parts[1]);
    lng = parseFloat(parts[0]);

    if (lat >= 90 && lat <= 90 && lng >= -180 && lng <= 180) {

      return `(${lat}, ${lng})`;
      
    
    }   

console.log(normalizeCoord("42.9755, -77.4369"));
console.log(normalizeCoord("[-77.4369, 42.9755]"));
console.log(normalizeCoord("[42.9755, -77.4369]"));
console.log(normalizeCoord("42.9755, -77.4369"));
console.log(normalizeCoord("-77.4369, 42.9755"));

}