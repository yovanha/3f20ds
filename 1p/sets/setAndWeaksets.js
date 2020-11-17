// Los sets tienen una estructura similar a los Arrays, pero cuentan con la peculiaridad que no se pueden introducir elementos repetidos como se verá a continuacion

// creamos un Array con elementos repetidos
var ary = [1, 1, 2, 3, 3, 4]

// creamos un Set con los elementos del Array
var miSet = new Set(ary)

// si lo mostramos en consola notaremos que nos muestra los elementos del Array pero descartará los elementos que se repiten: {1, 2, 3, 4}
console.log(miSet)

// podemos añadir más elementos con .add() y se agregará siempre y cuando no exista otro elemento igual
miSet.add(5)
miSet.add(3)
console.log(miSet)

// finalmente los Sets son iterables, es decir podemos recorrer sus elementos con ciclos
for(let i of miSet){
    console.log(i)
}

// Los Weaksets a diferencias de los Sets almacenan objetos de forma privada: { <items unknown> }
var ws = new WeakSet([{a:1}, {b:2}])
console.log(ws)

/*
debido a lo anterior los Weaksets no son iterables:

for(let i of ws){
    console.log(i)
} 
    TypeError: ws is not iterable
*/

// con .add() podemos añadir nuevos objetos al Weakset
var objeto1 = {c:3}
ws.add(objeto1)

// también podemos comprobar si dentro de Weakset exite un valor determinado
var objeto2 = {d:4}
console.log(ws.has(objeto1)) //true
console.log(ws.has(objeto2)) //false