/*
 * Author: maxkalb.github.io
 *
 * This script automizes/wraps the registration of translations for R.js.
 * To do so, it simply loads predefined translation js files to the head.
 * 
 * Uscase: Separate and easy up the translation process for R.js.
 *
 * 1. Define translation js file-names to be loaded.
 * 2. Set the directory of the translation files.
 *
 * Note: langdef.js file must be inside langdirectory too! 
 */
 
var langfiles = ['en_GB', 'de_DE'];
var langdirectory = 'tr/';

function loadjsfile( filename ) {
  var fileref = document.createElement('script');
  fileref.setAttribute("type", "text/javascript");
  fileref.setAttribute("src", filename);
  document.getElementsByTagName("head")[0].appendChild(fileref);
}

loadjsfile( langdirectory + 'langdef.js' );
for( var file of langfiles ) { 
  loadjsfile( langdirectory + file + '.js' ); 
}

