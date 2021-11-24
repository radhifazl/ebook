const webLoader = document.getElementById('loader-wrapper');
window.addEventListener('load', () => {
    webLoader.parentElement.removeChild(webLoader);
})


const navMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('nav-open');
            nav.classList.toggle('nav-open');
        });
    };
};

navMenu('hamburger-menu', 'nav-menu');

const navLinks = document.querySelectorAll('.nav-link');
function linkAction() {
    navLinks.forEach(n => n.classList.remove('active'));
    this.classList.add('active');
}
navLinks.forEach(n => n.addEventListener('click', linkAction));

const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    header.classList.toggle('nav-scrolled', window.scrollY > 10);
});

const buyBtn = document.querySelector('.buy-btn');
const buyIcon = document.getElementById('cart-icon');
buyBtn.addEventListener('mouseenter', () => {
    buyIcon.classList.add('bx-tada');
});

buyBtn.addEventListener('mouseleave', () => {
    buyIcon.classList.remove('bx-tada');
});

const chatBox = document.getElementById('chat');

const chatWhatsapp = () => {
    var chatBtn = document.querySelector('.submit-btn');
    chatBtn.addEventListener('click', () => {
        var inputWa = chatBox.value;
        var waText = inputWa.split(" ").join("%20");
        window.open(`https://wa.me/6283819801472/?text=${waText}`);
    });
};

chatWhatsapp();


