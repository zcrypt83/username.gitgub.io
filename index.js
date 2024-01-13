// Función para validar el formulario de contacto
function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;

    // Validar que los campos no estén vacíos
    if (nombre.trim() === '' || email.trim() === '' || mensaje.trim() === '') {
        alert('Por favor, completa todos los campos.');
        return false;
    }

    // Validar formato de correo electrónico
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return false;
    }

    // Mostrar mensaje de confirmación
    alert('¡Mensaje enviado con éxito!\n\nNombre: ' + nombre + '\nCorreo Electrónico: ' + email + '\nMensaje: ' + mensaje);

    // Limpiar campos después de enviar el formulario
    document.getElementById('nombre').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mensaje').value = '';

    return false; // Evitar que el formulario se envíe realmente
}

// Función para el desplazamiento suave al hacer clic en los enlaces de la barra de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
