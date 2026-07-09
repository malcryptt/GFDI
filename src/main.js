// Simple intersection observer for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.reveal');

    // Very subtle config for the intersection observer
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Unobserve after revealing to prevent re-animating
                obs.unobserve(entry.target);
            }
        });
    }, observerOptions);

    reveals.forEach(element => {
        observer.observe(element);
    });
});
