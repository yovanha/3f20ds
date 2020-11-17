var nombresMap = new Map()
var nombreBase = "nombre"
var numero = 1
while(nombresMap.size<10){
    var nombreCompleto = (nombreBase + numero).toString()
    nombresMap.set(numero, nombreCompleto)
    numero++
}
for(let nombre of nombresMap.values()){
    console.log(nombre)
}