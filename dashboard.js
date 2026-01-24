// 1. Verificar si el usuario está "logueado" (Simulación Frontend)
// En una app real, verificaríamos un token en localStorage/Cookies
/*
if (!localStorage.getItem('isLoggedIn')) {
    window.location.href = 'index.html';
}
*/

// 2. Configuración del Gráfico (Chart.js)
const ctx = document.getElementById('trafficChart').getContext('2d');

// Creamos un degradado para el gráfico (Toque moderno)
const gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, 'rgba(99, 102, 241, 0.5)'); // Color primario
gradient.addColorStop(1, 'rgba(99, 102, 241, 0)');   // Transparente

const trafficChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
        datasets: [{
            label: 'Visitantes Únicos',
            data: [120, 190, 300, 250, 400, 450],
            backgroundColor: gradient,
            borderColor: '#6366f1',
            borderWidth: 2,
            pointBackgroundColor: '#fff',
            fill: true, // Rellenar el área bajo la curva
            tension: 0.4 // Curva suave (Bézier)
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false } // Ocultar leyenda para diseño limpio
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: { color: 'rgba(255, 255, 255, 0.1)' },
                ticks: { color: '#94a3b8' }
            },
            x: {
                grid: { display: false },
                ticks: { color: '#94a3b8' }
            }
        }
    }
});

// 3. Lógica de Logout
document.getElementById('logoutBtn').addEventListener('click', (e) => {
    e.preventDefault();
    if(confirm('¿Seguro que quieres cerrar sesión?')) {
        // Simular limpieza de sesión
        // localStorage.removeItem('token');
        window.location.href = 'index.html';
    }
});