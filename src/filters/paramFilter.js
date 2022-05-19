export default (obj) => {
  let result = {}
  let key
  for (key in obj) {
    let col = obj[key]
    if (key != 'offset') {
      if (col && col != -1) {
        result[key] = col
      }
    } else if (key == 'offset') {
      result[key] = col
    }
  }
  return result
}
