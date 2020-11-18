var nombresSets = new Set()
var nombreBase = "name"
var tiempo = new Date().getTime();
while(nombresSets.size<99999){
    var numero = (Math.floor(Math.random() * (100000 - 1) + 1)).toString()
    var nombreCompleto = nombreBase + numero
    nombresSets.add(nombreCompleto)
}
console.log(nombresSets)
console.log('Tiempo de ejecución: ',tiempo,'ms');