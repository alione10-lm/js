const prompt = require("prompt-sync")();

let prices = [];

for (let i = 0; i < 5; i++) {
  let p = Number(prompt(`entrer le prix de l'article ${i + 1} :`));
  prices.push(p);
}

for (let i = 0; i < 5; i++) {
  let otherPrices = prices.filter((_, index) => index !== i);

  let moyenne =
    otherPrices.reduce((acc, curr) => acc + curr, 0) / otherPrices.length;

  if (prices[i] > moyenne) {
    console.log(`Article ${i + 1} : Ce produit est trop cher`);
  } else {
    console.log(`Article ${i + 1} : Prix raisonnable`);
  }
}
