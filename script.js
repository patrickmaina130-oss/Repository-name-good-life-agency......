/* ================================
   GOOD LIFE AGENCY - INTERACTIVE JS
   SAFE UPGRADE (NO BREAKING CHANGES)
================================ */

/* Smooth page load log */
console.log("Good Life Agency site loaded successfully 🚀");


/* ================================
   ACTIVE NAV LINK ON SCROLL (SCROLL SPY)
================================ */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});


/* ================================
   SMOOTH SCROLL ENHANCEMENT (SAFETY)
================================ */

navLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");

    if (targetId.startsWith("#")) {
      e.preventDefault();

      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


/* ================================
   BACK TO TOP BUTTON AUTO SHOW (OPTIONAL UPGRADE)
================================ */

const topBtn = document.querySelector("button");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});
