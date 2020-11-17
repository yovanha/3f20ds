var alfabeto = 8;
var numSimbolos = 8;
var resta = alfabeto-numSimbolos;
var num1;
var palabras = alfabeto;
for (let i = alfabeto; i>resta; i--){
    var resultado = palabras;
    num1 = i - 1;
    palabras = palabras * num1;
}
console.log (resultado);
