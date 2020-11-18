let s = [3,1,4,2,3];
    function potencia(x) {
        return x.reduce((k, y) => 
            k.concat(k.map(d => [y].concat(d))), [[]]);
    }
console.log(potencia(s));
console.log("Complejidad computacional: función cuadrátical");