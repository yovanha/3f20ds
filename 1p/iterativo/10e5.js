let x = [], 
    cant = 100000, 
    max = 99999, 
    min = 0, 
    tiempo = 0, 
    inversiones

for(let k = 0; k < 1; k++){
    random();
    let t1 = new Date().getTime();
    console.log(ordenar());
    let t2 = new Date().getTime();
    tiempo = t2-t1;    
}

function random(){
    for (y = 0; y < cant; y++){
        x[y] = Math.floor(Math.random() * max + min);
    }
    return x;
}

function mov(n, m){
    let l = x[n];
    x[n] = x[m];
    x[m] = l;
}

function ordenar(){
    inversiones = 0;
    for(let i = 0; i < cant; i++){
        for(let j = 0; j < cant-1; j++){
            if(x[j] > x[j+1]){
                mov(j, j+1);
                inversiones++
            }
            else continue;
        }
    }
    return x;
}


console.log('Inversiones promedio son: ',inversiones); //2,492,974,639
console.log('Promedio de tiempo de ejecución: ',tiempo,'ms'); //31,692
console.log('¿Se puede mejorar el tiempo de ejecución? Sí, por medio de distintos metodos de ordenamiento');
