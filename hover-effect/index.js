const cardsContainer = document.getElementById("cards");

cardsContainer.addEventListener("mousemove", (event) => {
  const cards = document.querySelectorAll(".card");
  for (let card of cards) {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    card.style.setProperty("--mouse-x", x + "px");
    card.style.setProperty("--mouse-y", y + "px");
  }
});
