/* Define language js files to be loaded */
var langfiles = ['en_GB', 'de_DE'];

/* Define the directory of the translations */
var langdirectory = 'js/';


/* Loads a js file and appends it to the head */
function loadjsfile(filename) {
  var fileref = document.createElement('script');
  fileref.setAttribute("type", "text/javascript");
  fileref.setAttribute("src", filename);
  document.getElementsByTagName("head")[0].appendChild(fileref);
}

/* Always load langdef.js (must be inside langdir!) */
loadjsfile(langdirectory + 'langdef.js');


/* Function to load all defined languages */
function loadLanguages() {
  for( var file of langfiles ) {
    loadjsfile( langdirectory + file + '.js' );
  } 
}
 
/* load ... */
loadLanguages();

