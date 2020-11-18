let diaAct = 0,
    semana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
    diasTotal,
    diasMenos

    function modular() {
        diasMenos = 11 % 7
        if(diasMenos >=diaAct){
            diasTotal = 7 + diaAct - diasMenos
            return semana[diasTotal]
        }
        diasTotal = diaAct - diasMenos
        return semana[diasTotal]    
    }

    console.log('Hace 11 dias fue ', modular())