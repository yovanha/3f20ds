var n = 10;
var vector = []
var x = 3;
var potencia = 1; 
var resultado;
for (let i = 0; i < n; i++)
{
    resultado = Math.pow(x,potencia);
    vector[i] = resultado;
    potencia += 1;
}
console.log(vector);
