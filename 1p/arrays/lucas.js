var num1 = 1;
var num2 = 2;
var n = 10;
var sigNum;
var vector = [];
for (let i = 0; i < 10; i++){
    sigNum = num1;
    vector[i] = sigNum;
    num1 += num2;
    num2 = sigNum;
}
console.log(vector);