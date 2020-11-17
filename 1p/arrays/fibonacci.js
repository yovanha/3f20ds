var n = 10;
var vector = [];
var num1 = 0;
var num2 = 1;
var sigNum;
for (let i = 0; i < 10; i++){
    sigNum = num1;
    vector[i] = sigNum;
    num1 += num2;
    num2 = sigNum;
}
console.log(vector);
