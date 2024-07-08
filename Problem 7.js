/*Programming With JavaScript QAP 2
 
Name: <Matthew Reid>
Date: <June 10, 2024> 
*/

function mimeFromFilename(filename) {

  let extension = filename.split('.').pop().toLowerCase();
  if (filename === extension) {
    return 'application/octet-stream';
  }

  switch (extension) {
    case 'html':
    case 'htm':
      return ;'text/html';

    case 'css':
      return 'text/ccs';

    case 'js':
      return 'text/javascript';

    case 'jpg':
    case 'jpeg':
      return 'image/jeg';

    case 'gif':
      return 'image/gif';

    case 'bmp':
      return 'image/bmp';
        
    case 'ico':
    case 'cur':
      return 'image/x-ico';

    case 'png':
      return 'image/png';

    case 'svg':
      return 'image/svg+xml';

    case 'webp':
      return 'image/webp';
      
    case 'mp3':
      return 'audio/mp3';

      case 'wav':
        return 'audio/wav';
  
      case 'mp4':
        return 'video/mp4';
        
      case 'webm':
        return 'video/webm';

      case 'json':
        return 'application/json';
    
      case 'mpeg':
        return 'video/mpeg';
          
      case 'csv':
        return 'text/csv';
               
      case 'ttf':
        return 'font/ttf';
    
      case 'woff':
        return 'font/woff';
          
      case 'zip':
        return 'application/zip'; 

      case 'avi':
        return 'video/x-msvideo';
    
      default:
        return 'application/octet-stream';
  }
}

console.log(mimeFromFilename('/User/Documents/readme.text'));
console.log(mimeFromFilename('index.html'));
console.log(mimeFromFilename('styles.css'));
console.log(mimeFromFilename('script.js'));
console.log(mimeFromFilename('image.JPG'));
console.log(mimeFromFilename('icon.ico'));
console.log(mimeFromFilename('archive.zip'));
console.log(mimeFromFilename('unknownfile.unknowext'));
console.log(mimeFromFilename('noextensionfile'));
