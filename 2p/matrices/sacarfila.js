var fila = 2

class Matriz {
    constructor(matriz){
        this.matriz= matriz;
    }
    sacaFila(n){
        console.log(this.matriz[n-1]);
    }
}

function test(){
    let object = new Matriz([
        [3, 5, 9],
        [7, 1, 0],
        [9, 4, 2]
    ]);
    console.log('Fila ', fila,':');
    object.sacaFila(fila);
}
test();