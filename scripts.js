// Fireworks effect
document.addEventListener('DOMContentLoaded', () => {
    const fireworksContainer = document.getElementById('fireworks');
    const colors = ['#ff3366', '#ff6699', '#ffccff', '#ffcc00', '#ff0066']; // Color array for fireworks

    function createFirework(x, y) {
        const firework = document.createElement('div');
        firework.style.position = 'absolute';
        firework.style.left = `${x}px`;
        firework.style.top = `${y}px`;
        firework.style.width = '10px';
        firework.style.height = '10px';
        firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        firework.style.borderRadius = '50%';
        firework.style.animation = 'explode 1s forwards';
        
        fireworksContainer.appendChild(firework);
        
        // Remove firework after animation ends
        firework.addEventListener('animationend', () => {
            firework.remove();
        });
    }

    // Create fireworks at random positions on the screen
    setInterval(() => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        createFirework(x, y);
    }, 200);
});
