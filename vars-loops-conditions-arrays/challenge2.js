const prompt = require("prompt-sync")();

let result = "";

const input = prompt("entrer une phrase : ");
for (let ndx = input.length - 1; ndx >= 0; ndx--) {
  console.log(input[ndx]);
  result += input[ndx];
}

console.log(result);
