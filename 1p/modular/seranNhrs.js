let hr = 10, 
    sumahr,
    mod,
    n = 16

function modular(){
    sumahr = n + hr
    mod = sumahr % 24
    return mod
}

console.log('En ', n ,' hrs serán las ', modular(), ' horas')