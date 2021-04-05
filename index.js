const isObject = o => 'object' === typeof o && o !== null
//
// Returns a function to access the given map by a key
function dictionary (map) {
  if (!isObject(map)) { map = {} }
  // Return value from the dictionary for the given key
  return key => map[key]
}
// Returns a function to access the given dictionary by the language
const dictionaries = maps => language => dictionary(maps[language]) || dictionary

module.exports = {
  dictionary, 
  dictionaries
}
