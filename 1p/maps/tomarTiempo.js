var nombresMap = new Map()
var nombreBase = "nombre"
var tiempo = new Date().getTime();
var n = 100000
while(nombresMap.size<n){
    var numero = (Math.floor(Math.random() * (100001 - 1) + 1)).toString()
    var nombreCompleto = nombreBase + numero
    nombresMap.set(numero, nombreCompleto)
    numero++
}
for(let nombre of nombresMap.values()){
    console.log(nombre)
}
console.log('Tiempo de ejecución: ',tiempo,'ms');