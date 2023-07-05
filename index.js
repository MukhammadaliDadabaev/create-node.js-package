function isStrNumberBool(a) {
  if ((typeof a) == 'string') {
    return 'string'
  } else if ((typeof a) == 'number') {
    return 'number'
  } else if ((typeof a) == 'boolean') {
    return 'boolean'
  } else {
    return 'others'
  }
}

module.exports = isStrNumberBool