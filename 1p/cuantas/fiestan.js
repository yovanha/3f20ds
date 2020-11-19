var n = 5;
var r = 2;
var resta = n-r;
var num1;
var saludos = n;
for (let i = n; i>resta; i--){
    var resultado = saludos;
    num1 = i - 1;
    saludos = saludos * num1;
}
console.log (resultado);