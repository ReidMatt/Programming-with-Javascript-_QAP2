/*Programming With JavaScript QAP 2
 
Name: <Matthew Reid>
Date: <June 10, 2024> 
*/

function generateLicenseLink(licenseCode, targetBlank) {

  const licenseTexts = {
    "CC-BY": "Creative Commons Attribution License",
    "CC-BY-NC": "Creative Commons Attribution-Comercial License",
    "CC-BY-SA": "Creative Commons Attribution-ShareAlike License",
    "CC-BY-ND": "Creative Commons Attribution-NoDerivs License",
    "CC-BY-NC-SA": "Creative Commons Attribution-NonCommercial-ShareAlike License",
    "CC-BY-ND": "Creative Commons Attribution-Noncommercial-NoDerivs License",};

    let explanationText;
    let url;

    if (licenseTexts.hasOwnProperty(licenseCode)) {
      explanationText = licenseTexts[licenseCode];
      const formattedCode = licenseCode.replace('CC-', '').toLowerCase();
      url = `https://creativecommons.org/licenses/${formattedCode}/4.0/`;
    } else {
      explanationText = "All Rights Reserved";
      url = 'https://choosealicense.com/no-permission/';
    }

    let link = '<a href="${url}">${explanationText}</a';

    if (targetBlank) {
      link = link.replace('>',' target="_blank">');
    }

    return link;

  }
    console.log(generateLicenseLink('CC-BY-NC'));
    console.log(generateLicenseLink('CC-BY-NC', true));
    console.log(generateLicenseLink('UNKNOWN'));
    console.log(generateLicenseLink('UKNKNOWN', true));


  
