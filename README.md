# Internalization

Why? I needed a simplest solution to internationalize my project both on
server and client-sides. 

I tried to use [LinguUI](https://github.com/lingui/js-lingui) but it didn't work out of the box. The [i18n](https://github.com/mashpie/i18n-node) did the job but it's not modular and includes many stuff I didn't need. Howerver, I liked how it worked at the most basic level. So, I just reproduced an essential functionality I needed at that moment.

I concider this project as a primer on internalization. 

No pluralization or any other manipulation of the source dictionaries is implemented.

# Usage

When one dictionary is provided, as it happens on client-side:
```js
const { dictionary } = require('ization')
const t = dictionary({
  'Hello friend': 'Ciao amico'
})

t`Hello friend` // Ciao amico
t`Not in dictionary` // undefined 
```

When a few dictionaries is provided, as it happens on server-side:
```js
const { dictionaries } = require('ization')
const speak = dictionaries({
  en: {
    'hi': 'Hello'
  },
  it: {
    'hi': 'Ciao'
  }
})
const t = speak('it')

t`hi` // Ciao
```
