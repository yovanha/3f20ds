//Serie de Fibonacci
var num1 = 0;
var num2 = 1;
var sigNum;
for (let i = 1; i <= 10; i++){
    sigNum = num1;
    console.log(sigNum);
    num1 = num1 + num2;
    num2 = sigNum;
}
