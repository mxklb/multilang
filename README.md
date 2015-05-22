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

Feel free to play around with it and/or send some pull requests for further translations or optimizations.

## How to use it - Initial Setup
If you plan to do client side translation using _multilang_ in your own project all you need is the content of the _tr/_ folder. _multilang_ depends on the _R.js_ lib so you should have that too. If you experience compatibility issues with the actual version of R.js let me know. To avoid this I use my own fork ... see submodule in _ext/rjs_.

Follow these steps to initially setup _multilang_:

- Make sure you have R.js included within your html document head first, then include _multilang.js_ afterwards.
```html
    <script type="text/javascript" src="ext/R.js"></script>
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

Now make sure to register and provide translations for all elements with the class attribute 'multilang'. How to do this is described in the following chapter ...  

## Adding languages - Edit Translations

- Generate a new translation file (_Note_: Requires utf8 encoding!)*
- Copy/Paste the content of _en_GB.js_ to get a good starting base
- Edit the translations and rename the file using default locales*
- Add the new translation option to _langdef.js_ and _langs.js_

*Policy: Please make sure to always use standard locale names for new translation files. Although make sure to use an underscore in filenames (_en\_GB.js_) while using the same name with substituted underscore, by a minus sign, for the language definition itself (_en-GB_).

Note: Arabic, Russian, Chinese, Thai, Greek, e.g.foreign characters .. would be nice ;)
