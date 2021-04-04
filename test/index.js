const equal = require('assert').deepEqual
const ization = require('..')

;(t => {
  equal('hi', t('hi'))

  t = t({ hi: 'hello' })
  equal('hello', t('hi'))

  equal(undefined, t())
})
  (ization.t)

;(dictionary => {
  let t 
  t = dictionary({
    en: {
      hi: 'hello' 
    }
  })
  equal('hello', t('en')('hi'))
  equal('hi', t('it')('hi'))

  t = dictionary({
    en: { 
      hi: 'hello' 
    }, 
    it: { 
      hi: 'ciao' 
    }
  })
  equal('ciao', t('it')('hi'))

  equal(undefined, t('it')())
  equal(undefined, t()())
})
  (ization.dictionary)
