let diaAct = 0,
    semana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
    diasTotal,
    mod

    function modular() {
        diasTotal = 11 + diaAct
        mod = diasTotal % 7
        return semana[mod]
    }

    console.log('En 11 días será ', modular())