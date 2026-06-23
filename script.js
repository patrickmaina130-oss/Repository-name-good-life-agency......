document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     MOBILE NAV TOGGLE
  ========================= */

  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelector(".nav-links");

  // Create hamburger button dynamically
  const menuBtn = document.createElement("div");
  menuBtn.classList.add("menu-btn");
  menuBtn.innerHTML = "☰";
  menuBtn.style.fontSize = "28px";
  menuBtn.style.color = "white";
  menuBtn.style.cursor = "pointer";

  navbar.prepend(menuBtn);

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  /* =========================
     SMOOTH SCROLL
  ========================= */

  const links = document.querySelectorAll(".nav-links a");

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").replace("#", "");
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 70,
          behavior: "smooth"
        });
      }

      // close mobile menu after click
      navLinks.classList.remove("active");
    });
  });

  /* =========================
     SCROLL ANIMATION (FADE IN)
  ========================= */

  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.2
  });

  sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
  });

});
