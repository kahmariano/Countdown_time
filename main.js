var today = new Date()
const birthday = new Date('2022-08-19')

var interval = birthday.getTime() - today.getTime()

function convertMS(milliseconds) {
  var day, hour, minute, seconds
  seconds = Math.floor(milliseconds / 1000)
  minute = Math.floor(seconds / 60)
  seconds = seconds % 60
  hour = Math.floor(minute / 60)
  minute = minute % 60
  day = Math.floor(hour / 24)
  hour = hour % 24
  alert(
    day +
      ' dias ' +
      hour +
      ' horas' +
      minute +
      ' minutos' +
      seconds +
      ' segundos'
  )
}

convertMS(interval)
