var num1 = 1;
var num2 = 1;
var n = 10;
var sigNum;
var vector = [];
for (let i = 0; i < n; i++){
    sigNum = num1;
    vector[i] = sigNum;
    num2 += 1;
    num1 += num2;
}
console.log(vector);