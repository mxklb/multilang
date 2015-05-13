# multilang

An offline capable (no server needed) JS only multilanguage HTML webpage test.

## Simple HTML/JS Internationalisation Setup

This is an example implementation demonstrating the usage of the _R.js_ lib written by [Keith Cirkel](https://github.com/keithamus).

This example is published using gh-pages, check out: [http://maxkalb.github.io/multilang/](http://maxkalb.github.io/multilang/).

All translations are defined within javascript ('json') files for better abstraction. The initialization uses a prefined default language while providing the user the ability to switch the language on demand. The choosen language is always backed up in the browsers local storrage for further usage - page reload. 

Feel free to play around with it and/or send pull requests for further translations or optimizations.

## Adding further translations

- Generate new translation file (_Note_: Needs utf8 encoding).
- Copy/Paste content of _en_GB.js_ to get a starting base.
- Edit the translations and rename the file using default locale*.
- Register the translation by _loadjsfile(..)_ within _langs.js_.
- Add select option to the _index.html_ to provide ui. 

*Make sure to always use standard locale names for new translation files.

Note: Arabic, Russian, Chinese, Thai, (foreign characters) .. would be nice ;)
