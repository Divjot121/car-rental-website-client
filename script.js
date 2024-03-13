if ("serviceWorker" in navigator){
    navigator.serviceWorker.register("service-worker.js").then(registration => {
        console.log("service worker registered");
        console.log(registration);
    }).catch(error => {
        console.log("service worker not registered");
        console.log(error);
    })
}
window.addEventListener('scroll', () => {
    document.querySelector('.nl-container').classList.toggle("scrolling", scrolly > 40)
})
const menuBtn = document.querySelector('.fa-bars');
const navlist = document.querySelector('.navlist');
menuBtn.onclick = function () {
    menuBtn.classList.toggle('fa-xmark');
    navlist.classList.toggle('active');
}

/* ** ==============SCROLL REVEAL============== ** */

const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true,
})

sr.reveal('.nav-top', { delay: 222, origin: 'top' })
sr.reveal('.home .info', { delay: 444, origin: 'bottom' })
sr.reveal('.info .booking-form', { delay: 999, origin: 'right' })
sr.reveal('.works', { delay: 600, origin: 'top' })
sr.reveal('.about-container .image', { delay: 322, origin: 'left' })
sr.reveal('.about-container .content', { delay: 322, origin: 'right' })
sr.reveal('.services .title', { delay: 322, origin: 'top' })
sr.reveal('.services-container', { delay: 322, origin: 'bottom' })
sr.reveal('.cars-container', { delay: 800, origin: 'bottom' })
sr.reveal('.blog-container', { delay: 322, origin: 'left' })
sr.reveal('.poster', { delay: 322, origin: 'bottom' })
sr.reveal('.contact-aside', { delay: 322, origin: 'bottom' })
sr.reveal('.contact-form', { delay: 600, origin: 'right' })
sr.reveal('footer', { delay: 600, origin: 'top' })