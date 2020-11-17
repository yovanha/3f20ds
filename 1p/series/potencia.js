var n = 10;
var x = 3;
var potencia = 1; 
var producto;
for (let i = 1; i <= n; i++)
{
    producto = Math.pow(x,potencia);
    console.log(producto);
    potencia += 1;
}
