//sen x = x - x^3/3! + ... -
var sen;
var n = 10;
for (let i = 1; i <= n; i++){
sen = i - ((Math.pow(i,3))/(3*2*1));
console.log(sen);
}
