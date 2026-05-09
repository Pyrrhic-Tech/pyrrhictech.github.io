const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click',function() {
    nav.classList.toggle('open');
});

/* reveal transition */

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
        else {
            entry.target.classList.remove('visible');
        }
    });
},
{
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
});

document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
});
