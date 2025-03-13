// Ejemplo de validación de formulario
document.querySelector("form").addEventListener("submit", function (event) {
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  if (!nombre || !email) {
    alert("Por favor, completa todos los campos.");
    event.preventDefault();
  }
});
