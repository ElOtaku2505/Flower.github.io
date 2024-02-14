window.addEventListener('DOMContentLoaded', function () {
    var hora = new Date().getHours();
    if (hora >= 7 && hora < 12) { // Si es de noche (de 7pm a 5:59am)
        document.body.classList.add('amanecer-modo');
    }
    if (hora >= 12 && hora < 19) { // Si es de noche (de 7pm a 5:59am)
        document.body.classList.add('tarde-modo');
    }
    if (hora >= 19 && hora < 7) { // Si es de noche (de 7pm a 5:59am)
        document.body.classList.add('noche-modo');
    }
});