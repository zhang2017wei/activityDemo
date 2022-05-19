export default (num) => {
  if (typeof num !== 'number') return
  let _length = num.toString().length,
    _saveNum
  if (_length <= 3) {
    _saveNum = num
  } else if (_length <= 6) {
    _saveNum =
      num.toString().substring(0, 3) + ',' + num.toString().substring(3)
  } else if (_length <= 9) {
    _saveNum =
      num.toString().substring(0, 3) +
      ',' +
      num.toString().substring(3, 6) +
      ',' +
      num.toString().substring(6)
  } else if (_length <= 12) {
    _saveNum =
      num.toString().substring(0, 3) +
      ',' +
      num.toString().substring(3, 6) +
      ',' +
      num.toString().substring(6, 9) +
      ',' +
      num.toString().substring(9)
  } else {
    _saveNum = num
  }
  return _saveNum
}
