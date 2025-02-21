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

// Initialize on page load
window.onload = () => {
    loadGallery();
};
