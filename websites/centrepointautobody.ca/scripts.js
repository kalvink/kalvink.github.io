document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded successfully!');

    window.addEventListener('scroll', function() {
        const header = document.getElementById('topHeader');
        if (window.scrollY > 0) {
            header.classList.add('solid');
        } else {
            header.classList.remove('solid');
        }
    });
});

function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}
