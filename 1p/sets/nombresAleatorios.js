var nombreBase = "name"
var i = 0
while(i<10){
    var numero = (Math.floor(Math.random() * (100 - 1) + 1)).toString()
    var nombreCompleto = nombreBase + numero
    console.log(nombreCompleto)
    i++
}