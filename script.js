const loginForm = document.getElementById('loginForm');
const submitBtn = document.getElementById('submitBtn');
const message = document.getElementById('message');
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

// 1. Feature: Mostrar/Ocultar contraseña
togglePassword.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    // Cambiamos la opacidad para dar feedback visual
    togglePassword.style.opacity = type === 'text' ? '1' : '0.7';
});

// 2. Feature: Manejo de Login Asíncrono (Simulado)
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Resetear estados
    message.textContent = '';
    message.className = 'message';
    
    // Estado de carga (Loading State)
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        // Simulamos una petición al servidor (espera de 2 segundos)
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Validación
        if (email === "admin@portfolio.com" && password === "admin123") {
            showFeedback("¡Bienvenido! Redirigiendo al Dashboard...", "success");
            // Aquí iría el window.location.href = ...
        } else {
            throw new Error("Credenciales inválidas. Intenta de nuevo.");
        }
    } catch (error) {
        showFeedback(error.message, "error");
        
        // Efecto de vibración en caso de error (UI moderna)
        loginForm.animate([
            { transform: 'translateX(0)' },
            { transform: 'translateX(-10px)' },
            { transform: 'translateX(10px)' },
            { transform: 'translateX(0)' }
        ], { duration: 300 });

    } finally {
        // Restaurar botón
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
    }
});

function showFeedback(text, type) {
    message.textContent = text;
    message.className = `message ${type}`;
}