// nav section

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 200;
        const height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            current = sec.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

var typingElement = document.getElementById("typing");

var textArray = [
    "Java Full Stack-Web Developer ",
    "Back-end Developer ",
    "Front-end Developer "
];

var typingIndex = 0;
var charIndex = 0;
var currentText = "";
var isDeleting = false;

function typeAnimation() {

    if (!isDeleting) {
        currentText = textArray[typingIndex].substring(0, charIndex++);
    } else {
        currentText = textArray[typingIndex].substring(0, charIndex--);
    }

    typingElement.textContent = currentText;

    let speed = isDeleting ? 80 : 120;

    if (!isDeleting && charIndex === textArray[typingIndex].length) {
        speed = 1200;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        typingIndex++;

        if (typingIndex >= textArray.length) typingIndex = 0;
    }

    setTimeout(typeAnimation, speed);
}

typeAnimation();

// Dynamic Copyright Year
const yearElement = document.getElementById('year');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Certifications Lightbox Modal Logic
const certModal = document.getElementById('cert-modal');
const certModalImg = document.getElementById('cert-modal-img');
const certModalTitle = document.getElementById('cert-modal-title');
const certModalClose = document.getElementById('cert-modal-close');
const certModalBackdrop = document.getElementById('cert-modal-backdrop');
const certButtons = document.querySelectorAll('.btn-view-cert');

function openCertModal(imgSrc, title) {
    if (!certModal) return;
    certModalImg.src = imgSrc;
    certModalTitle.textContent = title || 'Certificate Preview';
    certModal.classList.add('active');
    certModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeCertModal() {
    if (!certModal) return;
    certModal.classList.remove('active');
    certModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

certButtons.forEach(button => {
    button.addEventListener('click', () => {
        const imgSrc = button.getAttribute('data-cert-img');
        const title = button.getAttribute('data-cert-title');
        openCertModal(imgSrc, title);
    });
});

if (certModalClose) {
    certModalClose.addEventListener('click', closeCertModal);
}

if (certModalBackdrop) {
    certModalBackdrop.addEventListener('click', closeCertModal);
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && certModal && certModal.classList.contains('active')) {
        closeCertModal();
    }
});
