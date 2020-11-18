var nombresSets = new Set()
var nombreBase = "name"
var n = 100000
var tiempo = new Date().getTime();
while(nombresSets.size<n){
    var numero = (Math.floor(Math.random() * (100001 - 1) + 1)).toString()
    var nombreCompleto = nombreBase + numero
    nombresSets.add(nombreCompleto)
}
console.log(nombresSets)
console.log('Tiempo de ejecución: ',tiempo,'ms');