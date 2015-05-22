# multilang

An offline capable (no server needed) JS only static multilanguage HTML webpage template.

## Plain HTML/JS Internationalisation Wrapper for R.js

This is an example implementation demonstrating a usage of the _R.js_ lib written by [Keith Cirkel](https://github.com/keithamus).

This example is published using gh-pages. To check it out visit: [http://maxkalb.github.io/multilang/](http://maxkalb.github.io/multilang/).

I began this 'project' as _R.js_-example to be used for client side JS only internationalization 
in webapps. I did this, to learn how to use and handle the _R.js_ lib, with the vision in mind to integrate it later on into an existing project of mine. 
It finally grew up to some kind of interface (API/Wrapper) around _R.js_. My main purpose of it is, to make translation as easy 
and separted from the rest of the webapp as possible. Steps for adding new languages are almost automized. The code is
written to be (hopefully) easy understandable, maintainable and reusage friendly.

Single translations are defined within single javascript ('json') files for a best abstraction purpose. The initialization uses a prefined 
default language, while providing the user the ability to switch the language on demand. The selected language is always 
backed up in the browsers local storrage for further usage - page reload. 

## How to use it - Initial Setup
If you plan to do client side translation using _multilang_ in your own project all you need is the content of the _tr/_ folder. _multilang_ depends on the _R.js_ lib so you should have that too. If you experience compatibility issues with the actual version of R.js try using my own fork of it ... see submodule in _rjs_.

Follow these steps to initially setup _multilang_:

- Make sure you have R.js included within your html document head first, then include _multilang.js_ afterwards.
```html
    <script type="text/javascript" src="rjs/R.js"></script>
    <script type="text/javascript" src="tr/multilang.js"></script>
```
- Trigger _multilang_'s initialisation method _initLanguages()_ in your onload function (js)

```java    
    initLanguages();
```
- Set class attribute 'multilang' and a unique id for each html dom element to translate
```html
    <div id="fancy" class="multilang">initial text</div>
```
- Optionally add an empty 'select' to let _multilang_ autogenerate language select options
```html
    <select id="selectLanguage" onChange="selectedLanguageChanged();"></select>
```

Now make sure to register translations for all elements with the class attribute 'multilang'. How to do this is described in the following chapter ...  

## Adding languages - Register Translations

Single translations are defined within single javascript ('json') files. For each language generate a js file with UTF8 encoding. As best practice make sure to use standard POSIX locale names for new translation file names. Use underscore (`_`) in filenames while minus sign (`-`) for language registration ids. 

- Register translations for each dom element with the class attribute 'multilang' (see _/tr/en_GB.js_)
```java
    R.registerLocale('en-GB', 
    {
      'fancy': "translated text",
      ...
    });
```
- Setup translations: Define language file names which shall be loaded (see _/tr/multilang.js_)
```java
    ...
    // >-- Translations to be loaded .. 
    var langfiles = ['en_GB', 'de_DE'];
    ...
```
- Finaly define a name for each translation (see _/tr/langdef.js_)
```java
    R.registerLocale('langs', 
    { 
      'en-GB': "English",
      'de-DE': "German"
    });    
```

## Optional Setup

The 'Initial setup' section within _/tr/multilang.js_ provides advanced controls for _multilang_. The default language, R.js' advanced string formating (asf) and some major configuration/tweaking can be performed ...
    
- The default language is _en-GB_. To change this edit `var defaultlang = 'en-GB';`
    
- Use advanced string formating feature of R.js, `var asfEnable = true;`
         
    If asf is enabled provide a _custom.js_ file containing commands to substitue `%i` and `%s` within R.js registered translations. Also view the R.js documentation to get familiar with its asf.
```java
    function translateCustomTexts() {
        updateTranslationParameter('fancy', 7.5);
        //==updateTranslation('fancy', R('fancy', 7.5));
    }
```
Note: To manually load _custom.js_ at a later point in runtime set `var loadCustomjs = false;`. Othewise _custom.js_ will be automatically loaded as final script during _multilang_ initialisation _initLanguages()_.  

## Lincense
This code is licensed under MIT. See LICENSE file for further informations about this. 

Feel free to play around with the code and/or send pull requests for further translations or improvements. Arabic, Russian, Chinese, Thai, Greek, e.g. foreign characters .. would be nice to see. This would then be your personal evaluation/testing of _R.js_ and/or _multilang_ ;)