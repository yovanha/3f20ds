var elementos = [3,1,4,2,3];
var repetidos = [];
var temporal = [];
elementos.forEach((value,index)=>{
  temporal = Object.assign([],elementos);
  temporal.splice(index,1); 
  if(temporal.indexOf(value)!=-1 && repetidos.indexOf(value)==-1)      
  repetidos.push(value);
});
console.log(repetidos);
//su complejidad es de n2