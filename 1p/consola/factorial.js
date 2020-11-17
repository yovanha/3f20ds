var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var factorial = 1;
var num1;
rl.question('Límite del factorial ', (limite) => {
    for(let i = 1; i <= limite; i++){
        console.log('factorial de ', i, '= ', factorial);
        num1 = i + 1;
        factorial = factorial * num1;
        rl.close();
    }
})