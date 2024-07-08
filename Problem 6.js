/*Programming With JavaScript QAP 2
 
Name: <Matthew Reid>
Date: <June 10, 2024> 
*/

function normalizeCoord(value) {

  const noSpaceFormat = /^([-+]?\d*\.\d+),([-+]?\d*\.\d+)$/;

  const reversedWithSpaceFormat = /^\[\s*([-+]?\d*\.\d+),\s*([-+]?\d*\.\d+)\s*\]$/;

  let lat, lng;

  if (noSpaceFormat.test(value)) {
    const matches = value.match(noSpaceFormat);
    lat = parseFloat(matches[1]);
    lng = parseFloat(matches[2]);
  }
else if (reversedWithSpaceFormat.test(value)) {
  const matches = value.match(reversedWithSpaceFormat);
  lng = parseFloat(matches[1]);
  lat = parseFloat(matches[2]);

  } else {
  throw new Error('Invalid coordinate format');
}  
if (lng< -180 || lng > 180) {
  throw new Error('Longitude must be between -180 and 180');
}

if(lat < -90 || lat > 90) {
  throw new Error('Latitude must be between -90 and 90');
}

return '(${lat}, ${ing})';
  
}

function formatCoords(...values) {
  const formatCoords = values.map(value => {
    try {
      return normalizeCoord(value);
    } catch (error) {
      return null;
    }
  }).filter(coord => coord !== null);

  return `(${formattedCoords.join(', ')})`;
}

console.log(formatCoords("42.9755, -87.5643, -65.9856, 43.9876, 300, -9000"));

console.log(formatCoords(47.9876, -87.5643, -65.9856, 43.9876, "invalid format"));
