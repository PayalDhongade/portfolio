// Smooth hover animation for cards
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.transition = "box-shadow 0.3s ease, transform 0.3s ease";
      card.classList.add("shadow-lg");
    });
    card.addEventListener("mouseleave", () => {
      card.classList.remove("shadow-lg");
    });
  });
});
