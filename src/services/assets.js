const baseImgUrl =
  'https://xs-image.yinjietd.com/static/mini/activity/murderer/murdererIQiYi/image/title/'

export function setHonor(id) {
  switch (parseInt(id)) {
    case 10:
      return baseImgUrl + 'title_normal_knight.png'
    case 20:
      return baseImgUrl + 'title_normal_baron.png'
    case 30:
      return baseImgUrl + 'title_normal_viscount.png'
    case 40:
      return baseImgUrl + 'title_normal_earl.png'
    case 50:
      return baseImgUrl + 'title_normal_marquis.png'
    case 60:
      return baseImgUrl + 'title_normal_duke.png'
    case 70:
      return baseImgUrl + 'title_normal_prince.png'
    case 80:
      return baseImgUrl + 'title_normal_king.png'
    case 90:
      return baseImgUrl + 'title_normal_emperor.png'
    default:
      break
  }
}
