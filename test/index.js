const equal = require('assert').deepStrictEqual
const ization = require('../')

const english = {
  hi: 'hello',
  a: 0,
  b: 1
}
const italian = {
  hi: `ciao`
}

;(dictionary => {
  const t = dictionary(english)

  equal('hello', t('hi'))
  equal('hello', t`hi`)
  equal(0, t('a'))
  equal(0, t`a`)
  equal(1, t('b'))
  equal(1, t`b`)
  equal(undefined, t('wrong'))
  equal(undefined, t`wrong`)
  equal(undefined, t())
})(ization.dictionary)

;(dictionaries => {
  let speak
  let t

  speak = dictionaries({
    en: english
  })

  t = speak('en')
  equal('hello', t('hi'))
  t = speak('it')
  equal(undefined, t('hi'))

  speak = dictionaries({
    en: english, 
    it: italian
  })

  t = speak('it')
  equal('ciao', t('hi'))
})(ization.dictionaries)
