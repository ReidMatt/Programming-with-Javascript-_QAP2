/*Programming With JavaScript QAP 2
 
Name: <Matthew Reid>
Date: <June 10, 2024> 
*/

function createVideo(src, width, controls) {
  src = src.trim();

  let videoElement = `<video src="${src}"`;

  if (Number.isInteger(width) || (typeof width === 'string' && width.trim() !==''&& !isNaN(parseInt(width)))){
  videoElement += `width="${width}"`;
}

if (controls) {
  videoElement += `controls`;
}

videoElement += `></video>`;

return videoElement;
}

console.log(createVideo('http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4', 500, true));

console.log(createVideo('http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4', 600, true));

console.log(createVideo('http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4','invalid', true));

console.log(createVideo('http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4', false));