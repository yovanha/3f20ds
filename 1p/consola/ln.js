var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Valor de x: ' , (xx) => {
    rl.question('Valor de N: ', (nn) => {
        x = parseInt(xx)
        n = parseInt(nn)
        var signo="-";
        var frase="Ln(1+"+x+")=";
        var a=0;
        var resultado=0
        for (let i = 1; i <=n; i++) {
            var e= Math.pow(x,i);
            var d= e/i;
            if (signo=="+") {
                signo="-";
            }else{
                signo="+";
            }
            frase+=signo;
            frase+=d;

            if(i===1){
                resultado=a=d
            }else if (i%2===0) {
                resultado= a-d
                a=resultado
            }else{
                resultado= a+d
                a=resultado
            }
        }
        console.log(frase);
        console.log("Resultado: "+resultado);
        rl.close();
    })
})