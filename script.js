const searchInput = document.getElementById('search-input');
const hiddenInput = document.getElementById('hidden-input');
const luckyInput = document.getElementById('lucky-input');

// Actualiza el valor del campo oculto antes de enviar el formulario
document.getElementById('search-form').addEventListener('submit', () => {
    hiddenInput.value = searchInput.value.trim(); // Asigna el valor del input al formulario principal
});

document.getElementById('lucky-form').addEventListener('submit', () => {
    luckyInput.value = searchInput.value.trim(); // Asigna el valor del input al formulario "Voy a tener suerte"
});

function createDiv() {
    const button = document.querySelector('.buttonConfig');
    
    if (button.value === 'off') {
        // Crear un nuevo contenedor div
        const newContainer = document.createElement('div');
        newContainer.classList.add('menuOptions'); // Añadir clase para identificar el contenedor
        newContainer.innerHTML = `
            <div class="first">
                <a href="">Configuración de búsqueda</a>
                <a href="advanced-search.html">Búsqueda avanzada</a>
                <a href="">Tus datos en la búsqueda</a>
                <a href="">Historial de búsqueda</a>
                <a href="">Buscar en ayuda</a>
                <a href="">Enviar comentarios</a>
            </div>
            <div class="second">
                <a href="">Tema oscuro: Desactivado</a>
            </div>
        `;
        
        // Seleccionar el elemento existente por su clase
        const container = document.querySelector('.main');
        
        // Añadir el nuevo div al contenedor existente
        container.appendChild(newContainer);
        
        // Cambiar el valor del botón a 'on'
        button.value = 'on';
    } else {
        // Eliminar el contenedor existente
        const existingContainer = document.querySelector('.menuOptions');
        if (existingContainer) {
            existingContainer.remove();
        }
        
        // Cambiar el valor del botón a 'off'
        button.value = 'off';
    }
}