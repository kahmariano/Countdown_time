var today = Date.now()

var dataFinal = new Date('2022-08-19 00:00:00')

var conversao = 1000 * 60 * 60 * 24 * 60
var intervalo = (dataFinal - today) / conversao

alert(intervalo)
