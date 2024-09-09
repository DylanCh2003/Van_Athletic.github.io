const scriptUrl = 'https://script.google.com/macros/s/AKfycbzA1yWXpgaQVwIY8Ep6zBEthBUIpno_fO4DRPp8eFk-oKyTAJbn5yGC08nFNb3LANcu5A/exec';

document.addEventListener('DOMContentLoaded', function () {
    const form = document.forms['contact-form'];

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita el envío inmediato del formulario

        if (validateForm()) {
            // Si todas las validaciones pasan, se envía el formulario a Google Sheets
            fetch(scriptUrl, { method: 'POST', body: new FormData(form) })
                .then(response => {
                    Swal.fire({
                        icon: 'success',
                        title: '¡Enviado!',
                        text: 'Gracias por contactarnos. Nos pondremos en contacto contigo pronto.',
                        confirmButtonColor: '#026852',
                        customClass: {
                            confirmButton: 'btn btn-lg btn-success',
                        },
                        buttonsStyling: false
                    });
                })
                .then(() => {
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                })
                .catch(error => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Hubo un problema al enviar el formulario. Por favor, inténtalo de nuevo más tarde.',
                        confirmButtonColor: '#d33',
                        customClass: {
                            confirmButton: 'btn btn-lg btn-danger',
                        },
                        buttonsStyling: false
                    });
                    console.error("Error", error.message);
                });
        }
    });

    function validateForm() {
        let isValid = true;

        // Validar Nombre Completo
        const fullName = document.getElementById('fullName').value.trim();
        if (fullName === '') {
            Swal.fire({
                icon: 'warning',
                title: 'Error en el nombre',
                text: 'El nombre completo es obligatorio',
                confirmButtonColor: '#d33',
            }).then(() => {
                document.getElementById('fullName').focus();
            });
            isValid = false;
            return isValid;
        }

        // Validar Correo Electrónico
        const email = document.getElementById('email').value.trim();
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            Swal.fire({
                icon: 'warning',
                title: 'Error en el correo electrónico',
                text: 'Por favor, ingrese un correo electrónico válido',
                confirmButtonColor: '#d33',
            }).then(() => {
                document.getElementById('email').focus();
            });
            isValid = false;
            return isValid;
        }

        return isValid;
    }
});