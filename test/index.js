const equal = require('assert').deepEqual
const ization = require('..')

const english = {
  hi: 'hello'
}
const italian = {
  hi: 'ciao'
}

;(dictionary => {
  equal('hi', dictionary('hi'))

  const say = dictionary(english)
  equal('hello', say('hi'))

  equal(undefined, say())
})(ization.dictionary)

;(dictionaries => {
  let speak
  let say

  speak = dictionaries({
    en: english
  })

  say = speak('en')
  equal('hello', say('hi'))
  say = speak('it')
  equal('hi', say('hi'))

  speak = dictionaries({
    en: english, 
    it: italian
  })

  say = speak('it')
  equal('ciao', say('hi'))

  equal(undefined, say())

  say = speak()
  equal(undefined, say())
})(ization.dictionaries)
