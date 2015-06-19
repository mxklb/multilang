# multilang

An offline capable local - JS only - multilanguage setup for static HTML pages.

## Plain HTML/JS Internationalization using _R.js_

_multilang_ is a library-wrapper implementation demonstrating the [_R.js_ lib](https://github.com/keithamus/R.js) written by [Keith Cirkel](https://github.com/keithamus).

I began this project as _R.js_-evaluation to be used for client side internationalization within static HTML pages. I did this, to learn how to use and handle the _R.js_ lib, with the vision in mind to integrate it later on into an existing project of mine. It finally grew to some kind of interface (API/Wrapper) around _R.js_. 

The main purpose of _multilang_ is to generate translations as easy and separted from the rest of the webpage as possible. Steps for adding new languages are intuitive and almost automized. One time setup and easy maintenance are major aims. The initialization uses a prefined default language, while providing the users an ability to switch languages on demand. The users selected language is always 
backed up in the browsers local storrage for further usage - page reload.

This demo code is published with gh-pages. Check it out here: [http://mxklb.github.io/multilang/](http://maxkalb.github.io/multilang/).

## Initial Setup - How to use it
To use _multilang_ in your own project all you need is the content of _multilang_'s `tr/` folder and _R.js_ itself (_multilang_ depends on _R.js_). If you experience compatibility issues with some actual versions of _R.js_ try using my fork of it - therefore simple checkout _multilang_'s submodule [_rjs_](https://github.com/mxklb/R.js).

Follow these steps to initially setup _multilang_: 

- Make sure to load _R.js_ within your HTML document first and afterwards load _multilang.js_
```html
    <script type="text/javascript" src="rjs/R.js"></script>
    <script type="text/javascript" src="tr/multilang.js"></script>
```
- Set `class="multilang"` attribute and a unique `id=".."` for each HTML element to translate
```html
    <div class="multilang" id="fancy">initial text</div>
    <div class="multilang" id="number">text with num 7.5</div>
```
- Add an empty `<select>` to let _multilang_ autogenerate language select options ux
```html
    <select id="selectLanguage" onChange="selectedLanguageChanged();"></select>
```
- Trigger _multilang_'s initialisation method `initLanguages()` in your onload function

```java
    window.onload = function() { initLanguages(); }
```

Now make sure to register translations for all elements with the `class="multilang"` attribute ...

## Register Translations - Adding languages

Single translations are defined within single js files for best abstraction purpose. For each language generate one js file with UTF8 character encoding. 

- Register translations for each `class="multilang"` element `id`'s
```java
    // English translation -> en_GB.js 
    R.registerLocale('en-GB',
    {
      'fancy': "translated text",
      'number': "text with num %i"
    });
```

```java
    // German translation -> de_DE.js 
    R.registerLocale('de-DE',
    {
      'fancy': "übersetzter text",
      'number': "text mit nr %i"
    });
```
- Define a name for each language (viewed as `<select>` option)
```java
    // Language names -> langdef.js
    R.registerLocale('langs',
    { 
      'en-GB': "English",
      'de-DE': "German"
    });    
```
- Define which js translation-files shall be loaded
```java
    // Setup languages -> multilang.js
    var langfiles = ['en_GB', 'de_DE'];
```
Note: As best practice make sure to use standard POSIX locale names for new translation file names. For example execute `locale -a` in a shell to get locale names of your system. Make although sure to use underscore `_` in filenames while minus sign `-` for _R.js_ language registration `id`'s.

## Default Setup - Configuration

The initial setup section within _multilang.js_ provides some configuration controls for _multilang_. The initial default language, _R.js_' advanced string formating (asf) and some other configurations can be controlled ...
    
- The default language is _en-GB_. To change this edit `var defaultlang = 'en-GB'`

- The default translation directory is `tr/`. To change it set `var langdirectory = your/dir/` 

- The default `<select id="selectLanguage">`. To use an other `id` set `var langSelectId`
    
- Per default the asf-feature of _R.js_ is enanbled. To change it set `var asfEnable = false`
         
    If asf is enabled provide a _custom.js_ file within your translation directory and overwrite _multilang_'s `translateCustomTexts()` function in it. This function will always be executed if the language was changed or `updateLanguage()` was called. In it you are able to perfom custom translations and special _R.js_ calls. To get an idea view the following _custom.js_ code ..
```java
    // Custom translations -> custom.js
    function translateCustomTexts() {
        // hard coded substitution of innerHTML
        updateTranslation('fancy', 'any fancy string');
        
        // using R.js advanced string formating
        updateTranslation('number', R('number', 7.5));
        
        // simplified for one %i or %s replacement
        updateTranslationParameter('number', 7.5);
    }
```
_custom.js_ will be loaded automatically as final script during _multilang_'s initialisation `initLanguages()`. To manually load _custom.js_ at a later point in runtime set `var loadCustomjs = false`.

## License
This code is licensed under MIT. See LICENSE file for further informations about this. 

Feel free to play around with the code and/or send some pull requests for further translations or improvements. Arabic, Russian, Chinese, Thai, Greek, e.g. foreign characters would be nice to see ..
