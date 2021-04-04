# Internalization

Why? I needed a simplest solution to internationalize my project both on
server and client-sides. 

I tried to use [LinguUI](https://github.com/lingui/js-lingui) but it didn't work out of the box. The [i18n](https://github.com/mashpie/i18n-node) worked fine for me
but it's not modular and includs to much stuff I don't currently need. Howerver, 
I liked how it worked at the most basic level. So, I just reproduced essential functionality I needed at that moment.

I concider this project as a primer on internalization. 

No pluralization or any other manipulation of the source dictionaries is implemented.

# Usage

When one dictionay is provided, as it happens on client-side:
```js
const { t } = require('ization')({
  'Hello friend': 'Ciao amico'
})

t('Hello friend') // Ciao amico
t('Not in dictionary') // Not in dictionary
```

When a few dictionaries are provided, as it happens on server-side:
```js
const { dictionary } = require('ization')
const speak = dictionary({
  en: {
    'hi': 'Hello'
  },
  it: {
    'hi': 'Ciao'
  }
})
const t = speak('it')

t('hi') // Ciao
```
