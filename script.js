document.addEventListener("DOMContentLoaded", function () {

  // 🌍 AUTO-HIDE WELCOME POPUP
  const popup = document.getElementById("popup");

  if (popup) {
    setTimeout(() => {
      popup.style.opacity = "0";
      popup.style.transition = "0.5s ease";

      setTimeout(() => {
        popup.style.display = "none";
      }, 600);

    }, 4000); // popup shows for 4 seconds
  }

  // 🔗 SMOOTH SCROLL FOR NAV LINKS
  const links = document.querySelectorAll("nav a");

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const target = document.querySelector(targetId);

      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: "smooth"
        });
      }
    });
  });

  // 🌟 HIGHLIGHT ACTIVE SECTION ON SCROLL (basic UX improvement)
  const sections = document.querySelectorAll("section");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;

      if (pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    links.forEach(link => {
      link.classList.remove("active");

      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });

});
