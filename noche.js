window.addEventListener('DOMContentLoaded', function () {
    var hora = new Date().getHours();
    if (hora >= 19 && hora < 24) { // Si es de noche (de 7pm a 5:59am)
        document.body.classList.add('noche-modo');
    }
});