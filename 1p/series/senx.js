//sen x = x - x^3/3! + ... -
var senx;
var sen = 0;
var x = Math.PI/2;
var n = 10;
var f = 1;
function factorial(){
    for (let k=1; k<n; k++){
        f = f * k;
        return f;
    }
}
for (let i = 1; i <= n; i++){
    senx = Math.pow(-1,i)*(Math.pow(x,2*i+1)/factorial(2*i+1));
    sen += senx;
    console.log(sen);
}