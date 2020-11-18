let hr = 10, 
    sumahr,
    mod

function modular(){
    sumahr = 2500 + hr
    mod = sumahr % 24
    return mod
}

console.log('En 2,500 hrs serán las ' + modular() + ' horas')