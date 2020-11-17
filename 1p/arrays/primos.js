var i = 0;
var primo = 2;
var esPrimo = 1;
var n = 10;
var vector = [];
while (i <= n){
    let mitad = Math.round(primo / 2);
    while (mitad >= 2 && esPrimo == 1 ){
        if (primo % mitad == 0){
            esPrimo = 0;    
        }
        mitad--;    
    }
    if(esPrimo == 1){
        vector[i] = primo;
        i++;
    } 
    primo += 1;
    esPrimo = 1;
}
console.log(vector)