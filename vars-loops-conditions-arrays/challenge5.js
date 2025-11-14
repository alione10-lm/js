const prompt = require("prompt-sync")();

let arr = [];

for (let ndx = 0; ndx < 5; ndx++) {
  const input = Number(prompt("entrer un nombre : "));
  arr.push(input);
}

arr[0] == arr[length - 1] && arr[1] == arr[3]
  ? console.log("Symetrique")
  : console.log("Non symetrique ");
