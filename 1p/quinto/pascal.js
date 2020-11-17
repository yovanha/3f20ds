var n=5;
var renglon;  
var A=new Array(n);   
var B=new Array(n);  
for(var k=0;k<=n;k++){  
    A[k]=0;  
}    
A[1]=1; 
renglon=A[1]+'|';       
for(var i=2;i<=n;i++){    
    for(var j=1;j<=i;j++){
        B[j]=A[j-1]+A[j];     
        renglon+=B[j]+" ";    
}   
for(j=1;j<=i;j++){  
    A[j]=B[j];       
}  
 renglon+= "|"; 
}
console.log(renglon)