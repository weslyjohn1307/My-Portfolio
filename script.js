// Sample portfolio images (replace with your own URLs or upload system)
const portfolioImages = [
    'https://via.placeholder.com/400x300.png?text=Design+1',
    'https://via.placeholder.com/400x500.png?text=Design+2',
    'https://via.placeholder.com/400x350.png?text=Design+3',
    'https://via.placeholder.com/400x450.png?text=Design+4',
    'https://via.placeholder.com/400x300.png?text=Design+5'
];

// Function to load gallery
function loadGallery() {
    const gallery = document.getElementById('gallery');
    portfolioImages.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Portfolio Design';
        img.addEventListener('click', () => {
            img.classList.toggle('enlarged');
        });
        gallery.appendChild(img);
    });
}

// Add Christian symbols dynamically
function addSymbols() {
    const symbols = ['✝', '🕊️', '📖']; // Cross, Dove, Bible
    const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
    const symbolDiv = document.createElement('div');
    symbolDiv.textContent = randomSymbol;
    symbolDiv.style.position = 'absolute';
    symbolDiv.style.fontSize = '2rem';
    symbolDiv.style.color = '#d4af37';
    symbolDiv.style.opacity = '0.3';
    symbolDiv.style.left = `${Math.random() * 90}%`;
    symbolDiv.style.top = `${Math.random() * 90}%`;
    document.body.appendChild(symbolDiv);
}

// Initialize on page load
window.onload = () => {
    loadGallery();
    for (let i = 0; i < 5; i++) addSymbols(); // Add 5 random symbols
};
