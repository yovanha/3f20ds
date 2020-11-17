var s = [3,1,4,2,3];
var sum = 0; 
var avg = 0;
for( var i = 0; i < s.length; i++ ){
    sum += s[i];
}
avg = sum/s.length;
console.log(avg);