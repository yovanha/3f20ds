var nombresMap = new Map()
var nombreBase = "nombre"
var n = 20
while(nombresMap.size<n){
    var numero = (Math.floor(Math.random() * (100 - 1) + 1)).toString()
    var nombreCompleto = nombreBase + numero
    nombresMap.set(numero, nombreCompleto)
    numero++
}
for(let nombre of nombresMap.values()){
    console.log(nombre)
}