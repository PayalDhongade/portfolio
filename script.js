// Smooth hover animation for cards
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.transition = "box-shadow 0.3s ease, transform 0.3s ease";
      card.classList.add("shadow-lg");
      card.style.transform = "translateY(-5px)";
    });
    card.addEventListener("mouseleave", () => {
      card.classList.remove("shadow-lg");
      card.style.transform = "translateY(0)";
    });
  });

  // Smooth scrolling for internal links (navbar)
  document.querySelectorAll('a.nav-link[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Close navbar on mobile after clicking a link
      const bsCollapse = document.querySelector('.navbar-collapse');
      if (bsCollapse && bsCollapse.classList.contains('show')) {
        new bootstrap.Collapse(bsCollapse).hide();
      }
    });
  });

  // Navbar active section highlight on scroll
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
    });
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });

  // Typing animation
  const typingText = document.querySelector('.typing-text');
  if (typingText) {
    const words = ['Web Developer 💻', 'Cloud Enthusiast ☁️', 'Problem Solver 🔍'];
    let i = 0, j = 0, isDeleting = false;

    function type() {
      const word = words[i];
      typingText.textContent = word.substring(0, j);
      if (!isDeleting && j < word.length) j++;
      else if (isDeleting && j > 0) j--;
      else {
        isDeleting = !isDeleting;
        if (!isDeleting) i = (i + 1) % words.length;
      }
      setTimeout(type, isDeleting ? 70 : 120);
    }
    type();
  }

  // Project modal population (clean, single initialization)
  const projectButtons = document.querySelectorAll('.project-btn');
  const projectModalEl = document.getElementById('projectModal');
  if (projectButtons.length && projectModalEl) {
    const projectModal = new bootstrap.Modal(projectModalEl);
    const modalTitle = document.getElementById('projectModalLabel');
    const modalDesc = document.getElementById('projectModalDesc');
    const modalTech = document.getElementById('projectModalTech');

    projectButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        modalTitle.textContent = btn.getAttribute('data-title') || '';
        modalDesc.innerHTML = btn.getAttribute('data-desc') || ''; // preserve formatting
        modalTech.textContent = btn.getAttribute('data-tech') || '';
        projectModal.show();
      });
    });
  }
});
