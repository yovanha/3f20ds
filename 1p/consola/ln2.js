var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var ln = 0 
var l = 0
rl.question('Introduce x: ', (x) => {
rl.question('Introduce el número de iteraciones: ', (n) => {
for( i = 1; i <= n; i++){
  l = (Math.pow(x, i)*Math.pow(-1,i+1))/i;
  ln = l;
  rl.close();
}
console.log(ln);
})
})