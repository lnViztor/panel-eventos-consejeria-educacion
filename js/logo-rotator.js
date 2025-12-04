document.addEventListener("DOMContentLoaded", function () {
  const logoContainer = document.getElementById("logo");
  const positions = [
    "pos-bottom-right",
    "pos-bottom-left",
    "pos-top-right",
    "pos-top-left",
  ];
  let currentPositionIndex = 0;

  function changeLogoPosition() {
    // Eliminar la clase de posición actual
    logoContainer.classList.remove(positions[currentPositionIndex]);

    // Calcular el nuevo índice de posición
    currentPositionIndex = (currentPositionIndex + 1) % positions.length;

    // Añadir la nueva clase de posición
    logoContainer.classList.add(positions[currentPositionIndex]);
  }

  // Cambiar la posición del logo cada 1 hora
  setInterval(changeLogoPosition, 1 * 60 * 60 * 1000);

  // Cambiar la posición cada 3 horas (3 * 60 * 60 * 1000 milisegundos)
  //setInterval(changeLogoPosition, 3 * 60 * 60 * 1000);
  //cambiar la posición cada 5 segundos para pruebas
  s; //etInterval(changeLogoPosition, 5000);

  // Establecer una posición inicial al cargar la página
  logoContainer.classList.add(positions[currentPositionIndex]);
});
