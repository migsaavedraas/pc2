document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("login_button").addEventListener("click", function() {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        var userType = document.getElementById("user_type").value;

        if (userType === 'profe') {
            if (username === 'profe' && password === 'profe') {
                window.location.href = 'dashboard_profe.html';
            } else {
                alert('Usuario o contraseña incorrectos para el usuario Profe.');
            }
        } else if (userType === 'alumno') {
            if (username === 'alumno' && password === 'alumno') {
                window.location.href = 'dashboard_alumno.html';
            } else {
                alert('Usuario o contraseña incorrectos para el usuario Alumno.');
            }
        } else {
            alert('Tipo de usuario no válido.');
        }
    });
});
