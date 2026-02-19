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
