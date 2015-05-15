/* 
 * Overwrites 'translateCustomTexts()' for advanced translation control. 
 * 
 * Usecase: Use this function to overwrite translations for special element ids.
 * This is usful for custom translations using R.js' advanced string formating.
 *
 * This function will always be called after plain text translations finished!
 *
 * Note: Make use of 'updateTranslation(id, string)' function for validation.
 *       'updateTranslationParamer(id, param)' simplyfies this for %i and %s.
 */
function translateCustomTexts() {
  updateTranslationParamer('test1', 7.5);
  updateTranslationParamer('test2', '[bluBlub}');
  
  // >-- Try out some examples ...
  //updateTranslation('test1', R('test1', 7.5));
  //updateTranslation('test1', 'hard coded string');  
  //updateTranslation('test2', R('test2', '[bluBlub}'));
}
