
// Form submission
        document.getElementById('contactForm').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! I\'ll get back to you soon.');
            e.target.reset();
        });