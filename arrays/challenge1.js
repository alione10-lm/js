const prompt = require("prompt-sync")();
let arr = [];

for (let ndx = 0; ndx < 5; ndx++) {
  const input = Number(prompt("enter a number : "));
  arr.push(input);
}
console.log(arr);
