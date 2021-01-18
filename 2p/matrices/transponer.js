class Matriz {
  constructor(Matriz){
    this.matriz = Matriz;
  }
  //Filas a columnas y columnas a filas
  transponer(){
      //Matriz copia con 0
      let matriz2 = [];
        for(let i = 0; i < this.matriz.length; i++){
          matriz2.push([]);
          for(let j = 0; j < this.matriz.length; j++){
              matriz2[i].push(0);
          }
      }
      
      //Transponer
        for(let y = 0; y < this.matriz.length; y++){
          for(let x = 0; x <this.matriz.length; x++){
              matriz2[x][y] = this.matriz[y][x];
          }
      }
      console.log(matriz2);
  }
}

function test(){
  let object = new Matriz([
    [3, 5, 9],
    [7, 1, 0],
    [9, 4, 2]
]);
  console.log("Matriz transpuesta:")
  object.transponer();    
}
test();