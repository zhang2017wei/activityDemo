const REGEX = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/
export default (val, format) => {
  if (val) {
    let date = new Date(val)
    date.setHours(date.getHours() + 8)
    const [whole, yy, MM, dd, hh, mm, ss] = date.toISOString().match(REGEX)
    const year = new Date().getFullYear(),
      month = new Date().getMonth() + 1,
      dates = new Date().getDate()
    if (format) {
      return format
        .replace('yyyy', yy)
        .replace('yy', yy.slice(2))
        .replace('MM', MM)
        .replace('dd', dd)
        .replace('hh', hh)
        .replace('mm', mm)
        .replace('ss', ss)
      //}
    } else {
      return [yy, MM, dd].join('-') + ' ' + [hh, mm, ss].join(':')
      // return [yy, MM, dd].join('-');
    }
  } else {
    return '--'
  }
}
