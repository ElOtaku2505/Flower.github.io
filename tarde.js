window.addEventListener('DOMContentLoaded', function () {
    var hora = new Date().getHours();
    if (hora >= 12 && hora < 19) { // Si es de noche (de 7pm a 5:59am)
        document.body.classList.add('tarde-modo');
    }
});