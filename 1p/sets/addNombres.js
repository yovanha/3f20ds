var nombresSets = new Set()
var nombreBase = "name"
while(nombresSets.size<10){
    var numero = (Math.floor(Math.random() * (100 - 1) + 1)).toString()
    var nombreCompleto = nombreBase + numero
    nombresSets.add(nombreCompleto)
}
console.log(nombresSets)