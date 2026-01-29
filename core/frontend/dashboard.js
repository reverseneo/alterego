// URL de producción (OJO: Asegúrate de usar tu URL de Render)
const API_URL = 'https://api-portfolio-indigo.onrender.com/api/products'; 

document.addEventListener('DOMContentLoaded', async () => {
    try {
        // 1. Pedir el dato al backend
        const response = await fetch(`${API_URL}/stats`);
        const data = await response.json();

        // 2. Buscar el elemento HTML del contador
        // (Asegúrate de que en tu dashboard.html el número tenga id="totalProducts")
        const counterElement = document.getElementById('totalProducts');

        // 3. Actualizar el texto con animación simple
        if (counterElement) {
            counterElement.innerText = data.total;
        }

    } catch (error) {
        console.error('Error cargando estadísticas:', error);
    }
});