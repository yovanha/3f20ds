//secuencia 0,1,1,2,3,5,8
function fibonacci(num) {
  if (num == 1) return 0;
  if (num == 2) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}
console.log(fibonacci(5))