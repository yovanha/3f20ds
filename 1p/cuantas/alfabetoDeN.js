var n = 7;
var r = 4;
var resta = n-r;
var num1;
var palabras = n;
for (let i = n; i>resta; i--){
    var resultado = palabras;
    num1 = i - 1;
    palabras = palabras * num1;
}
console.log (resultado);