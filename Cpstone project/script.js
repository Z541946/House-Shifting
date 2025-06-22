document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in animation for sections on scroll
const sections = document.querySelectorAll('section');

function revealSections() {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', revealSections);
window.addEventListener('DOMContentLoaded', revealSections);

// Modal logic for Login/Sign Up
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');
const closeLogin = document.getElementById('closeLogin');
const closeSignup = document.getElementById('closeSignup');
const switchToSignup = document.getElementById('switchToSignup');
const switchToLogin = document.getElementById('switchToLogin');

if (loginBtn && loginModal && closeLogin) {
    loginBtn.onclick = () => loginModal.classList.add('show');
    closeLogin.onclick = () => loginModal.classList.remove('show');
}
if (signupBtn && signupModal && closeSignup) {
    signupBtn.onclick = () => signupModal.classList.add('show');
    closeSignup.onclick = () => signupModal.classList.remove('show');
}
if (switchToSignup && signupModal && loginModal) {
    switchToSignup.onclick = (e) => {
        e.preventDefault();
        loginModal.classList.remove('show');
        signupModal.classList.add('show');
    };
}
if (switchToLogin && signupModal && loginModal) {
    switchToLogin.onclick = (e) => {
        e.preventDefault();
        signupModal.classList.remove('show');
        loginModal.classList.add('show');
    };
}
// Close modal on outside click
window.onclick = function(event) {
    if (event.target === loginModal) loginModal.classList.remove('show');
    if (event.target === signupModal) signupModal.classList.remove('show');
};   