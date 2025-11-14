const prompt = require("prompt-sync")();

const input = prompt("entrer votre prenom : ");
const words = ["zilla", "inator", "tron", "balster"];

const result =
  input.slice(0, 3) + words[Math.floor(Math.random() * words.length)];

console.log(result);
