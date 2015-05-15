# multilang

An offline capable (no server needed) JS only multilanguage HTML webpage template.

## Plain HTML/JS Internationalisation Wrapper for R.js

This is an example implementation demonstrating a possible usage of the _R.js_ lib written by [Keith Cirkel](https://github.com/keithamus).

This example is published using gh-pages. To check it out visit: [http://maxkalb.github.io/multilang/](http://maxkalb.github.io/multilang/).

I began this 'project' as _R.js_-example to be used for client side JS only internationalization 
in webamps. I did this, to learn how to use and handle the _R.js_ lib, with the vision in mind to integrate it later on into an existing project of mine. 
It finally grew up to some kind of interface (API/Wrapper) around _R.js_. My main purpose of it is, to make translation as easy 
and separted from the rest of the webapp as possible. Steps for adding new languages are almost automized. The code is
written to be (hopefully) understandable, maintainable and reusage friendly.

Single translations are defined within single javascript ('json') files for a best abstraction purpose. The initialization uses a prefined 
default language, while providing the user the ability to switch the language on demand. The selected language is always 
backed up in the browsers local storrage for further usage - page reload. 

Feel free to play around with it and/or send some pull requests for further translations or optimizations.

## Adding further translations

- Generate a new translation file (_Note_: Requires utf8 encoding!)*
- Copy/Paste the content of _en_GB.js_ to get a good starting base
- Edit the translations and rename the file using default locales*
- Add the new translation option to _langdef.js_ and _langs.js_

*Policy: Please make sure to always use standard locale names for new translation files. Although make sure to use an underscore in filenames (_en\_GB.js_) while using the same name with substituted underscore, by a minus sign, for the language definition itself (_en-GB_).

Note: Arabic, Russian, Chinese, Thai, Greek, e.g.foreign characters .. would be nice ;)
