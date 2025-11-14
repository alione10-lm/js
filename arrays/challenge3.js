const prompt = require("prompt-sync")();

let arr = [];

for (let ndx = 0; ndx < 8; ndx++) {
  const input = Number(prompt("enter a number : "));
  arr.push(input);
}

const search = Number(prompt("search for : "));

const result = arr.find((num) => num === search);

result
  ? console.log(`present , son index : ${arr.indexOf(search)}`)
  : console.log("nombre introuvable !");
