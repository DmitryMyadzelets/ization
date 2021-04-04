const isObject = o => 'object' === typeof o && o !== null

// Returns a function to access the given map by the key
// Returns the key back if a map is not given
const t = map => isObject(map) ? key => map[key] || key : map

// Returns a function to access the given dictionary by the language
const dictionaries = dic => language => t(dic[language]) || t

module.exports = {
  dictionary: t, 
  dictionaries
}
