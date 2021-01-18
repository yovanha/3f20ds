var Columna = 2

class Matriz {
    constructor(matriz){
        this.matriz = matriz;
    }
    sacaColumna(n){
        let column = [];
        for(let i = 1; i <= this.matriz.length; i++){
            column.push(this.matriz[i-1][n-1]);
        }
        console.log(column);
    }
}
function test(){
    let object = new Matriz([
    [3, 5, 9],
    [7, 1, 0],
    [9, 4, 2]
]);
    //console.log (object);
    console.log('columna ', Columna,' :');
    object.sacaColumna(Columna);
}
test();