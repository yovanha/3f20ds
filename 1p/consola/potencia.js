var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout   
})
var resultado;
rl.question('Número base ', (numBase) => {
    rl.question('Límite ', (limite) => {
        for(let i = 1; i <= limite; i++){
            resultado = Math.pow(numBase,i);
            console.log(numBase, 'elevado a la ', i , '= ', resultado);
            rl.close();
        }
    })
})
