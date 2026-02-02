// Asegúrate de que esta sea TU URL de Render
const API_URL = 'https://api-portfolio-indigo.onrender.com/api/products'; 

document.addEventListener('DOMContentLoaded', async () => {
    // Referencia al elemento del número
    const totalElement = document.getElementById('totalProducts');

    try {
        // 1. Pedir los datos al Backend
        // Nota: Usamos '/stats' si creaste esa ruta, o contamos manualmente el array
        const response = await fetch(API_URL);
        const products = await response.json();

        // 2. Calcular el total real
        const totalReal = products.length;

        // 3. Actualizar la pantalla
        if (totalElement) {
            totalElement.innerText = totalReal;
            
            // Efecto visual opcional: Si hay pocos productos, ponerlo en rojo
            if(totalReal === 0) {
                totalElement.style.color = '#ef4444'; // Rojo
                totalElement.innerText = "0 (¡Agrega uno!)";
            } else {
                totalElement.style.color = '#fff'; // Blanco
            }
        }

    } catch (error) {
        console.error('Error cargando dashboard:', error);
        if (totalElement) totalElement.innerText = "Error";
    }
});