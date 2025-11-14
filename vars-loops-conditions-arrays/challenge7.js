const prompt = require("prompt-sync")();

word = prompt("enter a word = ");
let result = "";

word.split("").forEach((item) => {
  console.log((result += item));
});
