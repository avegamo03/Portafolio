document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById('formulario');
  const estado = document.getElementById('mensaje-estado');

  formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (!nombre || !correo || !mensaje) {
      estado.textContent = 'Por favor, completa todos los campos.';
      estado.style.color = 'red';
    } else {
      estado.textContent = '¡Gracias por tu mensaje! Te responderé pronto.';
      estado.style.color = '#ff9100';

      formulario.reset();

      setTimeout(() => {
        estado.textContent = '';
      }, 5000);
    }
  });
});