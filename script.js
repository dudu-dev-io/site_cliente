const logo = document.getElementById("logo");

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

logo.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - logo.offsetLeft;
    offsetY = e.clientY - logo.offsetTop;
    logo.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
    if (isDragging) {
        logo.style.position = "absolute";
        logo.style.left = e.clientX - offsetX + "px";
        logo.style.top = e.clientY - offsetY + "px";
    }
});

document.addEventListener("mouseup", () => {
    if (isDragging) {
        isDragging = false;
        logo.style.cursor = "grab";

        // volta suavemente para o centro
        logo.style.transition = "all 0.6s ease";
        logo.style.left = "50%";
        logo.style.top = "25px";
        logo.style.transform = "translateX(-50%)";

        setTimeout(() => {
            logo.style.position = "static";
            logo.style.transform = "none";
            logo.style.transition = "transform 0.3s ease";
        }, 600);
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelector(".social-float");
    buttons.style.opacity = "0";
    buttons.style.transition = "opacity 1s ease";

    setTimeout(() => {
        buttons.style.opacity = "1";
    }, 500);
});

// Toggle otimizado
document.querySelectorAll(".toggle-card").forEach(card => {
  card.addEventListener("click", () => {
    const content = card.querySelector(".hidden-content");
    content.classList.toggle("active");
  });
});

// WhatsApp formulário
const form = document.getElementById("orcamentoForm");

if(form){
  form.addEventListener("submit", function(e){
    e.preventDefault();

    const nome = nome.value;
    const telefone = telefone.value;
    const modelo = modelo.value;
    const mensagem = mensagem.value;

    const texto = `Olá! Gostaria de um orçamento:
Nome: ${nome}
Telefone: ${telefone}
Modelo: ${modelo}
Detalhes: ${mensagem}`;

    const url = `https://wa.me/5544991111171?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
  });
}