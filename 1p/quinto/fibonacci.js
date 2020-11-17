//Serie de Fibonacci
var num1 = 0;
var num2 = 1;
var n = 5;
var sigNum;
for (let i = 1; i <= n; i++){
    sigNum = num1;
    num1 = num1 + num2;
    num2 = sigNum;
}
console.log(sigNum);


/*
function fibonacci(num) {
    if (num == 1) return 0;
    if (num == 2) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
  console.log(fibonacci(5))
  //0,1,1,2,3,5,8
*/