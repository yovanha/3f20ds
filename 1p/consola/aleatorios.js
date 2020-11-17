var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Cantidad de números aleatorios ' , (cantidad) => {
    rl.question('Límite ', (limite) => {
        for (let i = 1; i <= cantidad; i++){
            console.log(Math.round(Math.random()*limite));
            rl.close();
        }
    })
})
