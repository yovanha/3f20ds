//formáto 24 hrs

let hr = 10,
    horasmenos,
    horatotal

    function modular(n) {
        horasmenos = 2500 % 24;
            if(horasmenos > n){
                horatotal = 24 + n - horasmenos
                return horatotal
            }
        horatotal = n - horasmenos
        return horatotal        
    }

    console.log('Hace 2500hrs fueron las ', modular(hr), ' horas')