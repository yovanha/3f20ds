var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var n;
var resultado = 0;
rl.question('Suma de número armónico ' , (n) => {
for (let i = 1; i<=n; i++){
    resultado += 1/i
}
console.log(resultado);
})