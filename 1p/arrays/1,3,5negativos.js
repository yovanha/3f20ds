var n = 10;
var vector = [];
var x = 1; 
var resultado;
var uno = 1;
for (let i = 0; i < n; i++)
{
    resultado  = x * (uno *= -1);
    vector[i] = resultado;
    x += 2;
}
console.log(vector);