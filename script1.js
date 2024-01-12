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

    // Si todo es válido, mostrar mensaje de confirmación
    alert('¡Mensaje enviado con éxito!\n\nNombre: ' + nombre + '\nCorreo Electrónico: ' + email + '\nMensaje: ' + mensaje);
    // Puedes agregar aquí lógica adicional, como enviar el formulario al servidor

    // Limpiar campos después de enviar el formulario
    document.getElementById('nombre').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mensaje').value = '';

    return false; // Evitar que el formulario se envíe realmente
}
