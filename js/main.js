/* Default language */
var lang = 'en-GB';

/* Initialization on page load */
window.onload = function() {
  initLanguageOptions();
  getLocalLanguage();
  updateLanguage();
}

/* Takes all langfiles and generates an select option for each */
function initLanguageOptions() {
  var select = document.getElementById("selectLanguage");
  for( var language of langfiles ) {
    option = document.createElement('option');
    option.value = option.id = language.replace('_','-');
    select.add(option);
  }
  
  R.setLocale('langs');
  for( var language of langfiles ) {
    language = language.replace('_', '-');
    document.getElementById(language).innerHTML = R(language);
  }
}

/* Tries to load lang from local storage */
function getLocalLanguage() {
  if( localStorage.getItem('lang') != null )
    lang = localStorage.getItem('lang');
}

/* Updates the viewed language due to 'lang' var */
function updateLanguage() {
  R.setLocale(lang);
  updateTranslations();
  updateLanguageOption();
}

/* Updates the viewed language */
function updateTranslations() {
  document.getElementById('test1').innerHTML = R('test1', 7.5);
  document.getElementById('test2').innerHTML = R('test2', '[ml/dl]');
  document.getElementById('test3').innerHTML = R('test3', 1.5);
}

/* Sets the lang selection due to 'lang' var */
function updateLanguageOption() {
  var select = document.getElementById("selectLanguage");
  if( select.options[select.selectedIndex].value != lang ) {
    for( var i=0; i<select.length; i++ ) {
      if( select.options[i].value == lang ) {
        select.selectedIndex = i;
        break;
      }
    }
  }
}

/* Called if user changes the language. 
 * Saves selection to the local storage.
 * And updates the viewed language.
 */
function showSelectedLanguage() {
  var select = document.getElementById("selectLanguage");
  lang = select.options[select.selectedIndex].value;
  localStorage.setItem('lang', lang);
  updateLanguage();
}

