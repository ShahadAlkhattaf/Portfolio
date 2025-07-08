const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');
const sections = document.querySelectorAll("section");
const navLinks_a = document.querySelectorAll(".nav-links a")

let current = "";

menuIcon.onclick = () => {
  navLinks.classList.toggle('active');
  menuIcon.classList.toggle('clicked');
};

document.addEventListener('click', function (e) {
  if (!navLinks.contains(e.target) && e.target !== menuIcon){
    navLinks.classList.remove('active');
    menuIcon.classList.remove('clicked');
  }
});

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if(pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks_a.forEach(link => {
    link.classList.remove("active-link");
    if (link.getAttribute("href") == "#" + current){
      link.classList.add("active-link");
    }
  });
});

document.querySelector('.visit-btn').addEventListener('click', function () {
  window.open('https://github.com/ShahadAlkhattaf', '_blank');
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#github-icon').addEventListener('click', () => {
    window.open('https://github.com/ShahadAlkhattaf', '_blank');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#linkedin-icon').addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/139b83332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', '_blank');
  });
});

window.addEventListener('pageshow', () => {
  document.querySelector('form.input-box').reset();
});
