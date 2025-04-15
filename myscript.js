const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("click", (event) => {
    // Make sure we're targeting the full card, not inner elements
    const clickedCard = event.currentTarget;
    const largeCard = document.querySelector(".card.large");
    // Prevent doing anything if the clicked card is already the large one
    if (clickedCard === largeCard) return;
    // Swap classes
    largeCard.classList.remove("large");
    largeCard.classList.add("small");
    clickedCard.classList.remove("small");
    clickedCard.classList.add("large");
  });
});