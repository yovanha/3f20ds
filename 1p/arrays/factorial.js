var n = 10;
var num1;
var factorial = 1;
var vector = [];
for (let i = 0; i<n; i++){
    vector[i] = factorial;
    num1 = i + 2;
    factorial = factorial * num1;
}
console.log (vector);