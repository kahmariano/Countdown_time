var today = new Date('2022-02-09')
const birthday = new Date('2022-08-19')

var interval = birthday.getTime() - today.getTime()
var intervalreal = interval / (1000 * 3600 * 24)

document.write(intervalreal)
