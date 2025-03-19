// Ejemplo de validación de formulario
document.querySelector("form").addEventListener("submit", function (event) {
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  if (!nombre || !email) {
    alert("Por favor, completa todos los campos.");
    event.preventDefault();
  }
  // Lógica para la sección de donaciones
  document.addEventListener("DOMContentLoaded", function () {
    const otroValorInput = document.getElementById("otro-valor");
    const otroRadio = document.getElementById("otro");

    otroRadio.addEventListener("change", function () {
      otroValorInput.disabled = !otroRadio.checked;
    });

    document.getElementById("donar-btn").addEventListener("click", function () {
      const selectedDonation = document.querySelector('input[name="donacion"]:checked');
      if (!selectedDonation) {
        alert("Por favor, selecciona una opción de donación.");
        return;
      }

      let donationValue = selectedDonation.value;
      if (donationValue === "otro") {
        donationValue = otroValorInput.value;
        if (!donationValue) {
          alert("Por favor, ingresa un valor para la donación.");
          return;
        }
      }

      alert(`¡Gracias por tu donación de $${donationValue}!`);
    });
  });
});
