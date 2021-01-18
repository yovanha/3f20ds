/* */

//Función para declarar los movimientos de los elementos del array
function mergeSort(arr) {
    //Si la cantidad de posiciones del array es menor a 2 regresa el valor declarado
    if (arr.length < 2) {
        return;
    }
    //Si no, se declaran los pasos que se realizarán por ciclo y las pocisiones en las que se moverán
    var step = 1; 
    var left, right;
    
    //Mientras la cantidad de pasos sea menor a la cantidad de elementos del array
    while (step < arr.length) {
        left = 0; 
        right = step;
    
        //Mientras la posición derecha más la posición sea menor a igual a la cantidad de elementos del array
        while (right + step <= arr.length) {
            mergeArrays(arr, left, left+step, right, right+step);
            left = right + step;
            right = left + step;
        }
    
        if (right < arr.length) {
        mergeArrays(arr, left, left+step, right, arr.length);
        }

    step *= 2;
    }
}

//Función para agrupar los elementos del array recursivamente
function mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) {
    var rightArr = new Array(stopRight - startRight + 1);
    var leftArr = new Array(stopLeft - startLeft + 1);
    
    //Elemento de la derecha
    k = startRight;
    for (var i = 0; i < (rightArr.length-1); ++i) {
        rightArr[i] = arr[k];
        ++k;
    }
    
    //Elemento de la izquierda
    k = startLeft;
    for (var i = 0; i < (leftArr.length-1); ++i) {
        leftArr[i] = arr[k];
        ++k;
    }

    rightArr[rightArr.length-1] = Infinity; // sentinel value
    leftArr[leftArr.length-1] = Infinity; // sentinel value
    
    var m = 0;
    var n = 0;
    //Ciclo para calcular si el elemento se moverá o no
    for (var k = startLeft; k < stopRight; ++k) {
        if (leftArr[m] <= rightArr[n]) {
        arr[k] = leftArr[m];
        m++;
        }
        else {
        arr[k] = rightArr[n];
        n++;
        }
    }
    //Mostrar el procedimiento 
    console.log("left array - ", leftArr);
    console.log("right array - ", rightArr);
    }

    var nums = [6,10,1,9,4,8,2,7,3,5]; //Se llenan los elementos del array
    console.log(nums);
    console.log();
    mergeSort(nums);
    console.log();
    console.log(nums);

    //Valor esperado [1,2,3,4,5,6,7,8,9,10]
