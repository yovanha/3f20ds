let diaAct = 0,
    semana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
    diasTotal,
    mod,
    n = 4

    function modular() {
        diasTotal = n + diaAct
        mod = diasTotal % 7
        return semana[mod]
    }

    console.log('En', n, 'días será ', modular())