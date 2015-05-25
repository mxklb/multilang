# multilang

An offline capable local - JS only - multilanguage setup for static HTML pages.

## Plain HTML/JS Internationalization using _R.js_

This is an example implementation demonstrating the [_R.js_ lib](https://github.com/keithamus/R.js) written by [Keith Cirkel](https://github.com/keithamus).

I began this project as _R.js_-evaluation to be used for client side internationalization 
within static HTML pages. I did this, to learn how to use and handle the _R.js_ lib, with the vision in mind to integrate it later on into an existing project of mine. It finally grew up to some kind of interface (API/Wrapper) around _R.js_. 

The main purpose of _multilang_ is to make translation as easy 
and separted from the rest of the webpage as possible. Steps for adding new languages are intuitive and almost automized. The initialization uses a prefined 
default language, while providing the user the ability to switch the language on demand. The user selected language is always 
backed up in the browsers local storrage for further usage - page reload.

This example is published using gh-pages. Check it out on: [http://maxkalb.github.io/multilang/](http://maxkalb.github.io/multilang/).

## Initial Setup - How to use it
To use _multilang_ in your own project all you need is the content of the _tr/_ folder and _R.js_ itself (_multilang_ depends on _R.js_). If you experience compatibility issues with some actual versions of _R.js_ try using my own fork of it, therefore checkout the submodule _rjs_.

Follow these steps to initially setup _multilang_:

- Make sure to load _R.js_ within your html document first and afterwards load _multilang.js_
```html
    <script type="text/javascript" src="rjs/R.js"></script>
    <script type="text/javascript" src="tr/multilang.js"></script>
```
- Set `class="multilang"` attribute and a unique `id=".."` for each html element to translate
```html
    <div id="fancy" class="multilang">initial text</div>
    <div id="number" class="multilang">text with num 7.5</div>
```
- Optionally add an empty `<select>` to let _multilang_ autogenerate language select options ui
```html
    <select id="selectLanguage" onChange="selectedLanguageChanged();"></select>
```
- Trigger _multilang_'s initialisation method `initLanguages()` in your onload function

```java
    window.onload = function() { initLanguages(); }
```

Now make sure to register translations for all elements with the `class="multilang"` ...

## Register Translations - Adding languages

Single translations are defined within single javascript ("json") files for best abstraction purpose.
For each language generate one js file with UTF8 character encoding. 

- Register translations for each dom element with the `class="multilang"` (_en_GB.js_)
```java
    R.registerLocale('en-GB', 
    {
      'fancy': "translated text",
      'number': "text with num %i",
      ...
    });
```
- Define which translations-files shall be loaded (_multilang.js_)
```java
    ...
    // >-- Translations to be loaded .. 
    var langfiles = ['en_GB', 'de_DE'];
    ...
```
- Finaly define `<select>` option names for each translation/language (_langdef.js_)
```java
    R.registerLocale('langs', 
    { 
      'en-GB': "English",
      'de-DE': "German"
    });    
```
Note: As best practice make sure to use standard POSIX locale names for new translation file names. For example execute `locale -a` in a shell to get locale names of your system. Make although sure to use underscore _ in filenames while minus sign - for language registration ids.

## Optional Setup

The initial setup section within _multilang.js_ provides advanced controls for _multilang_. The initial default language, _R.js_' Advanced String Formating (asf) and some major configurations and tweakings can be performed ...
    
- The default language is _en-GB_. To change this edit `var defaultlang = 'en-GB';`

- The default ui `<select id="selectLanguage">`. To use a different id set `var langSelectId`.

- The default translation directory is _tr/_. To change it set `var langdirectory`. 
    
- To enable advanced string formating (`%i`, `%s`) feature of _R.js_ set `var asfEnable = true;`
         
    If asf is enabled setup a _custom.js_ file within your translation directory and overwrite _multilang_'s `translateCustomTexts()` function. Implement your cutom _R.js_ commands here. To substitue single `%i` and `%s` statements within registered translations view the following _multilang_ code snippet. Also view code comments and the _R.js_ documentation to get familiar with the asf feature. _multilang_ may lack ssome features regarding the _R.js_-asf functionallity (tbd) ..
```java
    function translateCustomTexts() {
        updateTranslationParameter('number', 7.5);
        //==updateTranslation('number', R('number', 7.5));
    }
```
Note: Per default the _custom.js_ will be loaded automatically as final script during _multilang_'s initialisation `initLanguages()`. To manually load _custom.js_ at a later point in runtime set `var loadCustomjs = false`. 

## License
This code is licensed under MIT. See LICENSE file for further informations about this. 

Feel free to play around with the code and/or send some pull requests for further translations or improvements. Arabic, Russian, Chinese, Thai, Greek, e.g. foreign characters would be nice to see .. just enjoy it ..