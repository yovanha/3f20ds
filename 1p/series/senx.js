//sen x = x - x^3/3! + ... -
var y;
var x;
var n = 10;
for (let i = 1; i <= n; i++){
    y = y+((-1)^i)*(x^(2*i+1))/factorial(2*i+1)
}
console.log(y);
//sin(x):
//for i=0:10,
//y = y+((-1)^i)*(x^(2*i+1))/factorial(2*i+1);
//end