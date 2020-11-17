var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var i = 1;
var primo = 2;
var esPrimo = 1;
rl.question('Números primos hasta el ', (limite) => {
    while (i <= limite){
        let mitad = Math.round(primo / 2);
            while (mitad >= 2 && esPrimo == 1 ){
            if (primo % mitad == 0){
            esPrimo = 0;    
            }
        mitad--;    
        }
    if(esPrimo == 1){
        console.log(primo);
        rl.close();
        i++;
    } 
    primo += 1;
    esPrimo = 1;
    }
})