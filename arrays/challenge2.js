const prompt = require("prompt-sync")();

const numbers = [10, 20, 30, 40, 77, 99];

const somme = numbers.reduce((acc, curr) => acc + curr, 0);
const moyenne = somme / numbers.length;
console.log(`somme : ${somme}\n moyenne : ${moyenne}`);
