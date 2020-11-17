var n = 5;
var num1;
var factorial = 1;
for (let i = 1; i<=n; i++){
    num1 = i + 1;
    factorial = factorial * num1;
}
console.log (factorial);
/*
function factorial(number) {
    if (number == 1)return number;
    return number * factorial(number-1);
}
console.log(factorial(5));
*/