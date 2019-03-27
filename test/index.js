const download = require('../.');

// Easily access it in console
window.download = download;

document.getElementById("download-json").addEventListener("click", () => {
  const filetype = 'text/plain';
  const data = JSON.stringify({test:100, list: [1,3,5]});
  const filename = "test.json";
  
  download(filetype, data, filename);
}, false);

document.getElementById("download-text").addEventListener("click", () => {
  const filetype = 'application/txt';
  const data = "This is a test";
  const filename = "test.txt";
  
  download(filetype, data, filename);
}, false);
