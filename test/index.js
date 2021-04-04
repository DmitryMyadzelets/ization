const equal = require('assert').deepStrictEqual
const ization = require('..')

const english = {
  hi: 'hello'
}
const italian = {
  hi: 'ciao'
}

;(dictionary => {
  equal('hi', dictionary('hi'))

  const t = dictionary(english)
  equal('hello', t('hi'))

  equal(undefined, t())
  equal('wrong', t('wrong'))
  equal('wrong', t`wrong`)
  equal(0, t(0))
  equal(1, t(1))
  equal('', t``)
  equal(null, t(null))

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
