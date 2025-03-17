document.querySelector('.logo').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// lazyloading
document.addEventListener("DOMContentLoaded", function () {
    let lazyBackgrounds = document.querySelectorAll(".parallax-section");

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let bg = entry.target;
                bg.style.backgroundImage = `url(${bg.dataset.bg})`;
                observer.unobserve(bg);
            }
        });
    });

    lazyBackgrounds.forEach(section => {
        section.dataset.bg = getComputedStyle(section).backgroundImage.slice(5, -2); // Extract URL
        section.style.backgroundImage = "none"; // Remove initially
        observer.observe(section);
    });
});