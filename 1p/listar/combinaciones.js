var s = [3,1,4,2,3]
var result;
const combinacion = (inputArr) => {
    result = [];
    const comb = (arr, m = []) => {
        if (arr.length === 0) {
            result.push(m);
        } else {
            for (let i = 0; i < arr.length; i++) {
                let curr = arr.slice();
                let next = curr.splice(i, 1);
                comb(curr, m.concat(next));
            }
        }
    }
    comb(inputArr);
    return result;
}
console.log(combinacion(s));
console.log("Complejidad computacional: función cuadrática");