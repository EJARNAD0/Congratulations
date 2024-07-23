document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-audio');
    audio.play().catch(e => {
        console.error('Error playing audio:', e);
    });

    const celebrateBtn = document.getElementById('celebrate-btn');
    celebrateBtn.addEventListener('click', () => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    });
});
