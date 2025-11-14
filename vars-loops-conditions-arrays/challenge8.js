const prompt = require("prompt-sync")();

let arr = [];

for (let ndx = 0; ndx < 3; ndx++) {
  const item = Number(prompt("entrer un nombre :"));

  arr.push(item);
}

const result = arr.concat(arr.slice().reverse());

console.log(result);
