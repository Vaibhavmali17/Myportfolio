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
