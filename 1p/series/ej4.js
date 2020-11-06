//Numeros primos
var i = 1;
var primo = 2;
var esPrimo = 1;
var n = 10;
while (i <= n){
    let mitad = Math.round(primo / 2);
    while (mitad >= 2 && esPrimo == 1 ){
        if (primo % mitad == 0){
            esPrimo = 0;    
        }
        mitad--;    
    }
    if(esPrimo == 1){
        console.log(primo);
        i++;
    } 
    primo += 1;
    esPrimo = 1;
}