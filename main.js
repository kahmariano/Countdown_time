;(function (window, document, undefined) {
  window.onload = init
  function init() {
    const convertMS = milliseconds => {
      var day, hour, minute, seconds
      seconds = Math.floor(milliseconds / 1000)
      minute = Math.floor(seconds / 60)
      seconds = seconds % 60
      hour = Math.floor(minute / 60)
      minute = minute % 60
      day = Math.floor(hour / 24)
      hour = hour % 24

      var elemento = document.getElementById('countdownContainer')
      console.log(elemento)

      const newHtml = ` <p id="day">${day} </p>
<p id="hour">${hour}</p>
<p id="minutes">${minute}</p>
<p id="seconds">${seconds}</p>`

      elemento.innerHTML = newHtml
    }

    timer = setInterval(() => {
      var today = new Date()
      const birthday = new Date('2022-02-15')

      var interval = birthday.getTime() - today.getTime()
      convertMS(interval)

      // if (interval > 0) {
      //   return interval
      // } else interval <= 0
      // {
      //   return clearInterval(interval, 'iuu')
      // }
    }, 1000)

    function stop(interval) {
      if (interval > 0) {
        return interval
      } else interval <= 0
      {
        return (document.getElementById('countdownContainer').innerHTML =
          'concluido')
      }
    }
    clearInterval(timer)
    stop()
  }
})(window, document, undefined)
