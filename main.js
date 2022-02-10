var today = new Date()
const birthday = new Date('2022-08-19')

var interval = birthday.getTime() - today.getTime()

function msToHMS(ms) {
  const seg = ms / 1000
  const dias = Math.floor(seg / (3600 * 24))
  const horas = Math.floor((seg % (3600 * 24)) / 3600)
  const min = Math.floor((seg % 3600) * 60)
  const segs = Math.floor(seg % 60)
  alert(dias + ' dias ' + horas + ':' + min + ':' + segs)
}

msToHMS(interval)
