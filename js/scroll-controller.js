document.addEventListener("DOMContentLoaded", function () {
  const avisos = document.getElementById("avisos");
  const scrollContent = document.querySelector(".scroll-content");

  function checkAndApplyScroll() {
    if (!avisos || !scrollContent) return;

    // Obtener alturas
    const avisosHeight = avisos.clientHeight;
    const contentHeight = scrollContent.scrollHeight;

    // Si el contenido es mayor que el contenedor, aplicar animación
    if (contentHeight > avisosHeight) {
      scrollContent.style.animation = "scroll 40s linear infinite";
    } else {
      // Si cabe todo, remover la animación
      scrollContent.style.animation = "none";
    }
  }

  // Verificar al cargar
  checkAndApplyScroll();

  // Verificar cuando cambia el tamaño de la ventana
  window.addEventListener("resize", checkAndApplyScroll);
});
