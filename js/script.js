const searchInput = document.getElementById('search-input');
const hiddenInput = document.getElementById('hidden-input');
const luckyInput = document.getElementById('lucky-input');

document.getElementById('search-form').addEventListener('submit', () => {
    hiddenInput.value = searchInput.value.trim();
});

document.getElementById('lucky-form').addEventListener('submit', () => {
    luckyInput.value = searchInput.value.trim();
});

function createDiv() {
    const button = document.querySelector('.buttonConfig');
    
    if (button.value === 'off') {
        const newContainer = document.createElement('div');
        newContainer.classList.add('menuOptions');
        newContainer.innerHTML = `
            <div class="first">
                <a href="">Search settings</a>
                <a href="advanced-search.html">Advanced search</a>
                <a href="">Your data in Search</a>
                <a href="">Search history</a>
                <a href="">Search help</a>
                <a href="">Send feedback</a>
            </div>
            <div class="second">
                <a href="">Dark theme: Off</a>
            </div>
        `;
        
        const container = document.querySelector('.main');
        
        container.appendChild(newContainer);
        
        button.value = 'on';
    } else {
        const existingContainer = document.querySelector('.menuOptions');
        if (existingContainer) {
            existingContainer.remove();
        }
        
        button.value = 'off';
    }
}