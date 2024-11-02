document.addEventListener('DOMContentLoaded', () => {
    // Création des étoiles
    const starsContainer = document.createElement('div');
    starsContainer.className = 'stars';
    document.body.prepend(starsContainer);

    // Génération des étoiles
    for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = Math.random() * 3 + 'px';
        star.style.height = star.style.width;
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 2 + 's';
        starsContainer.appendChild(star);
    }

    // Animation du background
    function updateBackground() {
        const time = Date.now() * 0.001;
        const r = Math.sin(time * 0.3) * 10 + 10;  // Valeurs plus sombres
        const g = Math.sin(time * 0.2) * 10 + 10;
        const b = Math.sin(time * 0.4) * 30 + 46;  // Plus de bleu
        
        document.body.style.background = `
            radial-gradient(
                circle at 50% 50%,
                rgb(${r}, ${g}, ${b + 20}),
                rgb(${r - 5}, ${g - 5}, ${b})
            )
        `;
    }

    // Animation des nuages et autres éléments existants
    const clouds = document.querySelectorAll('.cloud');
    let positions = Array.from(clouds).map(() => Math.random() * 100);
    let speeds = Array.from(clouds).map(() => Math.random() * 0.001 + 0.001);

    function updateClouds() {
        clouds.forEach((cloud, index) => {
            positions[index] = (positions[index] + speeds[index]) % 100;
            const amplitude = 5;
            cloud.style.transform = `translateX(${Math.sin(positions[index] * 0.05) * amplitude}px)`;
        });
    }

    function animate() {
        updateBackground();
        updateClouds();
        requestAnimationFrame(animate);
    }

    animate();
}); 