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

document.getElementById('live-demo-project1').addEventListener('click', function() {
  window.open('https://shahadalkhattaf.github.io/Lets_Read_Website/', '_blank');
});

document.getElementById('github-repo-project1').addEventListener('click', function() {
  window.open('https://github.com/ShahadAlkhattaf/Lets_Read_Website', '_blank');
});

document.getElementById('live-demo-project2').addEventListener('click', function() {
  window.open('https://www.figma.com/proto/CC9q6JXY7P54GMseCPfBbX/Untitled?node-id=9-295&node-type=frame&t=zw8bhSPqDN3ztWfu-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=9%3A295', '_blank');
});

document.getElementById('github-repo-project2').addEventListener('click', function() {
  window.open('https://github.com/ShahadAlkhattaf/InstantParm/tree/main', '_blank');
});

document.getElementById('github-repo-project3').addEventListener('click', function() {
  window.open('https://github.com/ShahadAlkhattaf/kindergarten-app/tree/main', '_blank');
});

window.addEventListener('pageshow', () => {
  document.querySelector('form.input-box').reset();
});
