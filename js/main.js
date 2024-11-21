function quoteMessage() {
  const displayQuoteInde = Math.floor(Math.random() * mixQuotes.length);

  document.getElementById("outPut").innerHTML = `<p>
    ${mixQuotes[displayQuoteInde]}
    </p>`;
}
const mixQuotes = [
  "Health is not just about what you're eating. It's also about what you're thinking and saying. – Unknown",
  "The greatest wealth is health. – Virgil",
  "Take care of your body. It's the only place you have to live. – Jim Rohn",
  "A healthy outside starts from the inside. – Robert Urich",
  "The doctor of the future will no longer treat the human frame with drugs, but rather will cure and prevent disease with nutrition. – Thomas Edison",
  "To enjoy the glow of good health, you must exercise. – Gene Tunney",
  "Happiness is the highest form of health. – Dalai Lama",
  "It is health that is real wealth and not pieces of gold and silver. – Mahatma Gandhi",
  "The body achieves what the mind believes. – Napoleon Hill",
  "An ounce of prevention is worth a pound of cure. – Benjamin Franklin",
];
