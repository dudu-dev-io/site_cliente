document.addEventListener("DOMContentLoaded", function () {

    const popup = document.getElementById("popup");
    const closeBtn = document.querySelector(".close-btn");

    // Mostrar popup ao carregar
    setTimeout(() => {
        popup.style.display = "flex";
    }, 500);

    // Fechar popup
    closeBtn.addEventListener("click", function () {
        popup.style.display = "none";
    });

    // Fechar clicando fora
    window.addEventListener("click", function (e) {
        if (e.target === popup) {
            popup.style.display = "none";
        }
    });

});