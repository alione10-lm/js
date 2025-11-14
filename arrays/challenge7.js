const prompt = require("prompt-sync")();

const input = prompt("entrer une chaine : ").toLocaleLowerCase();
const test = ["a", "e", "i", "o", "u", "y"];
let count = 0;

input.split("").forEach((el) => {
  test.map((vowel) => (el === vowel ? count++ : null));
});

console.log("Nombre de voyelles" + count);
