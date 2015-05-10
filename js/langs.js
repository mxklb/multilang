/* Loads a js file and appends it to the head */
function loadjsfile(filename) {
  var fileref = document.createElement('script');
  fileref.setAttribute("type", "text/javascript");
  fileref.setAttribute("src", filename);
  document.getElementsByTagName("head")[0].appendChild(fileref);
}

/* Load language files relative to index.html */
loadjsfile("js/en_GB.js");
loadjsfile("js/de_DE.js");

