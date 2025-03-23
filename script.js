document.addEventListener("DOMContentLoaded", () => {
    console.log("Página cargada correctamente");

    // Navegación con scroll suave
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });
});

// Función para desplazar los certificados
function scrollCertificates(direction) {
    const slider = document.getElementById("certificates-slider");
    const scrollAmount = 300; // Cantidad de desplazamiento

    if (direction === "left") {
        slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else if (direction === "right") {
        slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
}