function potenciaRecursiva(a, b){
    if (b == 0) return 1;  
    return a * potenciaRecursiva(a, b-1);
} console.log(potenciaRecursiva(5, 2));