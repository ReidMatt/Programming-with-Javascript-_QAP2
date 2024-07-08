/*Programming With JavaScript QAP 2
 
Name: <Matthew Reid>
Date: <June 10, 2024> 
*/

function buildUrl(query, order, count, license) {
  const validOrders = ['ascending', 'descending'];
  const validLicenses = ['none', 'any', 'cc-by', 'cc-by-nc', 'cc-by-sa', 'cc-by-nd', 'cc-by-nc-sa', 'cc-by-nc-nd'];

  if (typeof query !== 'string' || !query.trim()) {
    throw new Error('Invalid query');
  }
  if(!validOrders.includes(order)) {
  throw new Error('Invalid order');
}
  if (typeof count !== 'number' || count <1 || count > 50) {
    throw new Error ('Invalid count');
  }

  if (!validLicenses.includes(license)) {
    throw new Error('Invalid license');
  }

  const encodedQuery = encodeURIComponent(query.trim());
  const url = `https://api.inaturalist.org/v2/observations?query=${encodeQuery}&count=${count}&order=${order}&license=${license}`;

  return url;
}

console.log(buildUrl('Monarch Butterly', 'ascending', 25, 'cc-by'));

console.log(buildUrl('Horse-chestnut', 'descending', 10, 'cc-by-sa'));