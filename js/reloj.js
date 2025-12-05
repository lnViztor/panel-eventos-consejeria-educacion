function updateClock() {
  const now = new Date();

  // 1. FORMATEAR LA FECHA (Parte superior)
  // Opciones para obtener: "jueves, 4 de diciembre de 2025"
  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  // Obtenemos la fecha en español
  let dateString = now.toLocaleDateString("es-ES", dateOptions);

  // Actualizamos el DOM de la fecha
  document.getElementById("date").textContent = dateString;

  // 2. FORMATEAR LA HORA (Parte inferior)
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  // Actualizamos el DOM de la hora y segundos
  document.getElementById("time").innerHTML = `${hours}<span class="blinking-colon">:</span>${minutes}`;
  document.getElementById("seconds").textContent = seconds;
}
// Llamamos a la función una vez al inicio para evitar el parpadeo de "00:00"
updateClock();

// Actualizamos cada segundo (1000 ms)
setInterval(updateClock, 1000);
