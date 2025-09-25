// Header background change
window.addEventListener("scroll", function(){
  const header = document.querySelector("header");
  if(window.scrollY > 50){
    header.style.background = "#001a22";
  } else {
    header.style.background = "#003344";
  }
});

// Fade-in sections
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });
});

// Active link highlight
const navLinks = document.querySelectorAll("nav .menu a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    const secTop = sec.offsetTop;
    if (pageYOffset >= secTop - 60) {
      current = sec.getAttribute("id");
    }
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});