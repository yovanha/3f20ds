var invitados = 3;
var saludos = 3;
var resta = invitados-saludos;
var num1;
var palabras = invitados;
for (let i = invitados; i>resta; i--){
    var resultado = palabras;
    num1 = i - 1;
    palabras = palabras * num1;
}
console.log (resultado);