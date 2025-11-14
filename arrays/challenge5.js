const prompt = require("prompt-sync")();

let arr = [];

for (let ndx = 0; ndx < 7; ndx++) {
  const input = Number(prompt("enter a number : "));
  arr.push(input);
}

const max = Math.max(...arr);
const min = arr.sort((a, b) => a - b).at(0);

console.log(`le max : ${max}\n le min: ${min}`);
