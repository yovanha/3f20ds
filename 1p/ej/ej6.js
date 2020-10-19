//Lucas
var num1 = 1;
var num2 = 2;
var n = 10;
var sigNum;
for (let i = 1; i <= n; i++){
    sigNum = num1;
    console.log(sigNum);
    num1 = num1 + num2;
    num2 = sigNum;
}
