// Change navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#555'; // Darker color on scroll
    } else {
        navbar.style.backgroundColor = '#333'; // Original color
    }
});
