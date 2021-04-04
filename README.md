# Internalization

Why? I Needed a simplest solution to internationalize my project both on
server and client-sides. I tried to
use [LinguUI](https://github.com/lingui/js-lingui) but it didn't work out of
the box. The [i18n](https://github.com/mashpie/i18n-node) worked fine for me
but that package included to much of stuff I don't need currently. Howerver, 
I liked how it works at the most basic lelvel. So, I reproduced the essential function I needed at the time.

I concider this project code as a primer to learn how internalization
works. 

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
